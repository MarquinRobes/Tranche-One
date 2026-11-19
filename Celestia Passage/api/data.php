<?php
// GET: everything the pages need (packages, FAQs, contact settings) as JSON.
require __DIR__ . '/../config/database.php';
header('Content-Type: application/json; charset=utf-8');

try {
    $pdo = db();
    $img = fn(string $f) => '../static/images/' . $f;

    $packages = [];
    $rows = $pdo->query(
        "SELECT p.package_id, n.slug, n.name AS nation, n.eyebrow, n.accent_color,
                p.title, p.description, p.price_per_person, p.days, p.nights, p.image_file
           FROM packages p JOIN nations n ON n.nation_id = p.nation_id
          WHERE p.is_active = 1 ORDER BY p.package_id"
    )->fetchAll();

    $stopQ = $pdo->prepare('SELECT name FROM package_stops WHERE package_id = ? ORDER BY stop_order');
    $dayQ  = $pdo->prepare('SELECT title, description, image_file FROM itinerary_days WHERE package_id = ? ORDER BY day_number');

    foreach ($rows as $r) {
        $stopQ->execute([$r['package_id']]);
        $dayQ->execute([$r['package_id']]);
        $packages[$r['slug']] = [
            'nation'      => $r['nation'],
            'eyebrow'     => $r['eyebrow'],
            'title'       => $r['title'],
            'description' => $r['description'],
            'stops'       => array_column($stopQ->fetchAll(), 'name'),
            'price'       => (float)$r['price_per_person'],
            'duration'    => "{$r['days']} Days / {$r['nights']} Nights",
            'image'       => $img($r['image_file']),
            'color'       => $r['accent_color'],
            'itinerary'   => array_map(
                fn($d) => [$d['title'], $d['description'], $img($d['image_file'])],
                $dayQ->fetchAll()
            ),
        ];
    }

    $faqs = $pdo->query('SELECT question, answer FROM faqs ORDER BY sort_order')->fetchAll();
    $settings = $pdo->query('SELECT setting_key, setting_value FROM site_settings')->fetchAll(PDO::FETCH_KEY_PAIR);
    if (isset($settings['director_image']))  $settings['director_image']  = $img($settings['director_image']);
    if (isset($settings['home_hero_image'])) $settings['home_hero_image'] = $img($settings['home_hero_image']);

    echo json_encode(['packages' => $packages, 'faqs' => $faqs, 'settings' => $settings], JSON_UNESCAPED_UNICODE);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Could not load data from the database.']);
}
