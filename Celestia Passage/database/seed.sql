USE celestia_passage;
SET NAMES utf8mb4;

INSERT INTO nations (slug,name,eyebrow,accent_color) VALUES
('mondstadt','Mondstadt','The Nation of Freedom','#287d73'),
('liyue','Liyue','The Nation of Contracts','#a4681d'),
('inazuma','Inazuma','The Nation of Eternity','#7954a7'),
('sumeru','Sumeru','The Nation of Wisdom','#397a4c'),
('fontaine','Fontaine','The Nation of Justice','#3975a9'),
('natlan','Natlan','The Nation of War','#b84c31'),
('snezhnaya','Snezhnaya','The Nation of Love','#568295');

INSERT INTO packages (nation_id,title,description,price_per_person,days,nights,image_file) VALUES
(1,'The City of Freedom Expedition','Experience the romantic charm of windmills, rolling green hills, and historic stone architecture. Perfect for travelers looking for a relaxing nature getaway.',12500,3,2,'mondstadt.webp'),
(2,'The Harbor of Stone and Commerce','A bustling port city tour blending breathtaking mountain ranges, ancient folklore, and world-class culinary adventures.',15000,4,3,'liyue.jpg'),
(3,'The Realm of Eternal Thunder','Discover a culturally rich archipelago featuring striking purple foliage, traditional shrines, and serene coastal views.',18000,4,3,'inazuma.webp'),
(4,'The City of Wisdom & Rainforest Retreat','A dual-environment journey taking you from the majestic halls of learning to the dense, mystical canopies of the rainforest.',14000,3,3,'sumeru.webp'),
(5,'The Capital of Justice, Steam, and Aquanics','Step into a picturesque hub of art, fashion, and advanced clockwork engineering surrounded by pristine waters.',20000,5,4,'fontaine.webp'),
(6,'The Land of Ash, Hot Springs, and Valor','An energetic adventure featuring dramatic volcanic landscapes, therapeutic thermal springs, and vibrant tribal festivals.',16500,4,3,'natlan.png'),
(7,'The Eternal White Tundra','A majestic winter expedition exploring frosted architectural marvels, grand palaces, and cozy alpine chalets under the aurora.',22000,5,4,'snezhnaya.webp');

INSERT INTO package_stops (package_id,stop_order,name) VALUES
(1,1,'Cider Lake'),
(1,2,'Windrise'),
(1,3,'Grand Cathedral of Mondstadt'),
(2,1,'Liyue Harbor'),
(2,2,'Mt. Aocang'),
(2,3,'Wangshu Inn'),
(3,1,'Narukami Island Grand Shrine'),
(3,2,'Ritou Trading Port'),
(3,3,'Tenshukaku'),
(4,1,'Sumeru City Academy'),
(4,2,'Gandharva Ville'),
(4,3,'Caravan Ribat'),
(5,1,'Court of Fontaine'),
(5,2,'Opera Epiclese'),
(5,3,'Lucine Fountain'),
(6,1,'Tepecac Stadium'),
(6,2,'Children of the Echoes Canyon'),
(6,3,'People of the Springs basin'),
(7,1,'Zapolyarny Palace outskirts'),
(7,2,'Frost-bound Valleys'),
(7,3,'Glacial Outposts');

INSERT INTO itinerary_days (package_id,day_number,title,description,image_file) VALUES
(1,1,'Arrival in the City of Freedom','Private transfer, old-city orientation walk, Cathedral visit, and welcome dinner.','cath.webp'),
(1,2,'Windrise','A guided countryside escape, lakeside picnic, and golden-hour windmill views.','wind.png'),
(1,3,'Leisurely farewell','Local market morning and a relaxed departure transfer.','depart1.webp'),
(2,1,'Harbor lights','Arrival, waterfront promenade, and chef-led tasting dinner.','harbor.webp'),
(2,2,'Above the clouds','Full-day Mt. Aocang scenic excursion with a private guide.','mt.webp'),
(2,3,'Ancient roads','Folklore trail and sunset at Wangshu Inn.','wangshu.webp'),
(2,4,'Market morning','Souvenir stop and assisted departure.','depart2.webp'),
(3,1,'Across the narrows','Arrival at Ritou and a lantern-lit welcome meal.','ritou.webp'),
(3,2,'Sacred Narukami','Shrine trail, garden tea, and coastal viewpoints.','narukami.png'),
(3,3,'Seat of eternity','Tenshukaku heritage tour and artisan workshop.','tenshukaku.webp'),
(3,4,'Island farewell','A relaxed breakfast and port transfer.','depart3.webp'),
(4,1,'City of scholars','Academy district walk, bazaar lunch, and cultural briefing.','academy.webp'),
(4,2,'Under the canopy','Guided rainforest trek and evening in Gandharva Ville.','gandharva.png'),
(4,3,'Desert threshold','Caravan Ribat excursion and stargazing supper.','caravan.png'),
(5,1,'A grand entrance','Aquabus arrival and boulevard orientation.','aquabus.webp'),
(5,2,'Court & couture','Architecture walk and fashion atelier visit.','court.jpg'),
(5,3,'A day at the opera','Opera Epiclese tour and evening performance.','opera.png'),
(5,4,'Waters of Fontaine','Lucine Fountain, and tasting menu.','waters.jpg'),
(5,5,'Final promenade','Leisure time and private departure.','depart5.jpg'),
(6,1,'Welcome to Natlan','Arrival celebration and regional feast.','welcome.webp'),
(6,2,'Echoes of the canyon','Guided canyon route and craft village visit.','canyon.webp'),
(6,3,'Fire & water','Volcanic overlook, hot springs, and festival evening.','spring.jpg'),
(6,4,'Champion''s farewell','Tepecac Stadium tour and departure.','stadium.webp'),
(7,1,'Into the north','Heated transfer, equipment fitting, and fireside dinner.','arrival.webp'),
(7,2,'Palace horizons','Architecture route around the Zapolyarny outskirts.','palace.avif'),
(7,3,'Frost-bound valleys','Guided snow trek and alpine chalet lunch.','valley.webp'),
(7,4,'Under the aurora','Glacial outpost excursion and northern-lights watch.','aurora.webp'),
(7,5,'Warm farewell','Slow breakfast and assisted departure.','farewell.jpg');

INSERT INTO faqs (question,answer,sort_order) VALUES
('What is included in the base price?','Your package includes accommodation, scheduled destination transfers, guided activities listed in the itinerary, and select meals. International transport and personal expenses are not included.',1),
('How do group prices work?','The displayed rate is per person. Select your party size in the reservation form for an instant package estimate. Groups of six or more can request a tailored quotation.',2),
('Can I check a date before paying?','Yes. Reservation requests are free and do not require payment. We confirm your preferred date first, then send a secure payment schedule.',3),
('Can an itinerary be customized?','Absolutely. The listed itineraries are thoughtfully paced starting points. Tell us about dietary needs, accessibility requirements, or special interests in your follow-up consultation.',4),
('What is your cancellation policy?','You may cancel without charge before accepting your final quotation. Confirmed trips follow the cancellation terms shown with your payment schedule.',5);

INSERT INTO site_settings (setting_key,setting_value) VALUES
('contact_phone','+63 969 123 4567'),
('contact_email','celestiapassage@gmail.com'),
('office_hours','Mon–Sat, 8:00 AM–6:00 PM'),
('director_image','director.png'),
('home_hero_image','homebg.png');

INSERT INTO booking_statuses (name) VALUES ('pending'),('confirmed'),('cancelled'),('completed');

INSERT INTO customers (full_name,email) VALUES
('Lumine Aether','lumine@example.com'),
('Paimon Guide','paimon@example.com'),
('Kaeya Alberich','kaeya@example.com');

INSERT INTO bookings (reference,customer_id,package_id,travel_date,travelers,unit_price,status_id) VALUES
('CP-A1B2C3',1,1,'2027-01-15',2,12500.00,1),
('CP-D4E5F6',2,3,'2027-02-10',4,18000.00,2),
('CP-G7H8J9',3,5,'2027-03-05',2,20000.00,1);
