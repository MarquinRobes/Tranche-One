<?php
// POST: save a reservation request (customer + booking) in one transaction.
require __DIR__ . '/../config/database.php';
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Use POST.']);
    exit;
}

$in = json_decode(file_get_contents('php://input'), true) ?: $_POST;
$slug      = trim((string)($in['package'] ?? ''));
$name      = trim((string)($in['name'] ?? ''));
$email     = trim((string)($in['email'] ?? ''));
$date      = (string)($in['date'] ?? '');
$travelers = (int)($in['travelers'] ?? 0);

$errors = [];
if ($name === '' || mb_strlen($name) > 120)                 $errors[] = 'Enter your full name.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))             $errors[] = 'Enter a valid email address.';
if ($travelers < 1 || $travelers > 10)                      $errors[] = 'Travelers must be between 1 and 10.';
$d = DateTime::createFromFormat('Y-m-d', $date);
if (!$d || $d->format('Y-m-d') !== $date || $d <= new DateTime('today')) $errors[] = 'Choose a future travel date.';
if ($errors) {
    http_response_code(422);
    echo json_encode(['errors' => $errors]);
    exit;
}

try {
    $pdo = db();
    $pdo->beginTransaction();

    $pk = $pdo->prepare('SELECT p.package_id, p.price_per_person FROM packages p
                           JOIN nations n ON n.nation_id = p.nation_id
                          WHERE n.slug = ? AND p.is_active = 1');
    $pk->execute([$slug]);
    $package = $pk->fetch();
    if (!$package) {
        $pdo->rollBack();
        http_response_code(422);
        echo json_encode(['errors' => ['That destination is not available.']]);
        exit;
    }

    // One customer row per email; update the name if they come back.
    $pdo->prepare('INSERT INTO customers (full_name, email) VALUES (?, ?)
                   ON DUPLICATE KEY UPDATE full_name = VALUES(full_name), customer_id = LAST_INSERT_ID(customer_id)')
        ->execute([$name, $email]);
    $customerId = (int)$pdo->lastInsertId();

    $statusId = (int)$pdo->query("SELECT status_id FROM booking_statuses WHERE name = 'pending'")->fetchColumn();

    $reference = '';
    for ($try = 0; $try < 5; $try++) {
        $reference = 'CP-' . strtoupper(substr(bin2hex(random_bytes(4)), 0, 6));
        try {
            $pdo->prepare('INSERT INTO bookings (reference, customer_id, package_id, travel_date, travelers, unit_price, status_id)
                           VALUES (?, ?, ?, ?, ?, ?, ?)')
                ->execute([$reference, $customerId, $package['package_id'], $date, $travelers, $package['price_per_person'], $statusId]);
            break;
        } catch (PDOException $e) {
            if ($e->getCode() !== '23000' || $try === 4) throw $e; // retry only on duplicate reference
        }
    }
    $pdo->commit();

    echo json_encode([
        'ok' => true,
        'reference' => $reference,
        'total' => (float)$package['price_per_person'] * $travelers,
    ]);
} catch (Throwable $e) {
    if (isset($pdo) && $pdo->inTransaction()) $pdo->rollBack();
    http_response_code(500);
    echo json_encode(['errors' => ['Something went wrong saving your request. Please try again.']]);
}
