# Celestia Passage: database + PHP connection

## Folder layout (put these next to your existing `static/` and pages folders)
```
your-site/
  api/data.php         GET  packages, FAQs, contact info as JSON
  api/book.php         POST reservation request -> saves customer + booking
  config/database.php  DB host / name / user / password
  database/schema.sql  tables        database/seed.sql  sample data
  static/js/script.js  REPLACES your script.js (loads from the DB)
  (your pages folder: index.html, mondstadt.html, ...)
```
The JS calls `../api/data.php` and `../api/book.php`, the same way your pages use `../static/...`, so your pages folder and `api/` must be siblings. If your pages are somewhere else, change those two paths in `script.js`.

## Setup (XAMPP / Laragon / any MySQL or MariaDB)
1. Start Apache and MySQL.
2. In phpMyAdmin, Import `database/schema.sql`, then `database/seed.sql` (or `mysql -u root < database/schema.sql`).
3. Open `config/database.php` and set user/password if yours is not `root` with an empty password.
4. Open your site through Apache (http://localhost/...). It must be served by PHP, not opened as a file.

Sample images are referenced by file name only (e.g. `mondstadt.webp`). The folder prefix `../static/images/` is added by `api/data.php`.

## Tables (3NF)
- `nations` (slug, name, eyebrow, accent color) 1 - n `packages` (title, description, price_per_person, days, nights, image)
- `packages` 1 - n `package_stops` and 1 - n `itinerary_days`
- `customers` (unique email) 1 - n `bookings` n - 1 `packages`; `bookings` n - 1 `booking_statuses` (pending, confirmed, cancelled, completed)
- `faqs`, `site_settings` (phone, email, hours, director image)
- `bookings.unit_price` is a price snapshot at request time. The total is `unit_price * travelers`, so it is not stored.

## Useful queries
```sql
-- All reservations
SELECT b.reference, c.full_name, c.email, n.name AS nation, b.travel_date, b.travelers,
       b.unit_price * b.travelers AS total, s.name AS status
FROM bookings b JOIN customers c USING (customer_id) JOIN packages p USING (package_id)
JOIN nations n USING (nation_id) JOIN booking_statuses s USING (status_id)
ORDER BY b.created_at DESC;

-- Confirm a booking
UPDATE bookings SET status_id = (SELECT status_id FROM booking_statuses WHERE name='confirmed')
WHERE reference = 'CP-A1B2C3';
```

## Optional CSS for the error line in the booking form
```css
.form-error { color: #b3261e; font-size: .9rem; margin: .5rem 0; }
.form-error:empty { display: none; }
```
