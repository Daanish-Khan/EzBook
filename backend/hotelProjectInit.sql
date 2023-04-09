CREATE SCHEMA hotel_project_db; #NEEDED IF CREATING FROM SCRATCH.

CREATE DATABASE IF NOT EXISTS hotel_project_db;
USE hotel_project_db;


CREATE TABLE hotelChains (
  name VARCHAR(255) PRIMARY KEY NOT NULL,
  office_address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  country VARCHAR(50) NOT NULL,
  num_hotels INT NOT NULL
);

CREATE TABLE hotels (
  address VARCHAR(255) PRIMARY KEY NOT NULL,
  chainName VARCHAR(255),
  FOREIGN KEY (chainName) REFERENCES hotelChains (name),
  city VARCHAR(100) NOT NULL,
  country VARCHAR(50) NOT NULL,
  star_rating INT NOT NULL,
  CHECK (star_rating >= 1),
  CHECK (star_rating <= 5),
  num_rooms INT NOT NULL,
  phoneNumber VARCHAR(50) NOT NULL,
  manager INT
);

CREATE TABLE employees (
  SSN INT PRIMARY KEY NOT NULL, 
  full_name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  works_at VARCHAR (255) NOT NULL,
  FOREIGN KEY (works_at) REFERENCES hotels (address),
  role VARCHAR (255) NOT NULL
);

ALTER TABLE hotels Add constraint manager foreign key (manager) references employees(SSN); #add manager foreign key

CREATE TABLE rooms (
  room_num INT NOT NULL,
  hotel VARCHAR(255) NOT NULL,
  FOREIGN KEY (hotel) REFERENCES hotels (address),
  PRIMARY KEY (room_num, hotel),
  price FLOAT NOT NULL,
  capacity INT NOT NULL,
  view_type VARCHAR(100),
  amenities VARCHAR(255),
  expandable BOOLEAN NOT NULL,
  status VARCHAR(100) NOT NULL DEFAULT 'Available'
);

CREATE TABLE customers (
  SSN INT PRIMARY KEY NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  reg_date DATETIME DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE bookings (
  room_num INT NOT NULL,
  hotel VARCHAR(255) NOT NULL,
  customer INT,
  FOREIGN KEY (hotel) REFERENCES hotels (address),
  FOREIGN KEY (room_num) REFERENCES rooms (room_num),
  FOREIGN KEY (customer) REFERENCES customers (SSN),
  PRIMARY KEY (hotel, room_num, startDate),
  isPaid BOOLEAN NOT NULL DEFAULT false,
  startDate date NOT NULL,
  endDate date NOT NULL
);

CREATE TABLE emails (#stores all emails for chains and hotels
	chainName VARCHAR(255), 
    email VARCHAR(50) NOT NULL, 
	FOREIGN KEY(chainName) REFERENCES hotelChains (name),
    PRIMARY KEY(chainName, email)
);

CREATE TABLE chainPhoneNumbers (#stores all phone numbers for chains
	chainName VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(50) NOT NULL,
	PRIMARY KEY (chainName, phoneNumber),
	FOREIGN KEY (chainName) REFERENCES hotelChains (name)
);

#Adding the initial entries into each table
INSERT INTO hotelChains(name, office_address, city, country, num_hotels) VALUES 
('Best Western', '100 Younge Street', 'Toronto','Canada', 8),
('Value Motels', '31 Laurier Avenue', 'Ottawa','Canada', 9),
('Fairmont Hotels', '620 Fifth Avenue', 'New York','United States', 8),
('Bizarre Accommodations', '31 Riverside Drive', 'Alert','Canada', 8),
('Horrible Value Hotels', ' 2457 Santa Monica Boulevard', 'Los Angeles','United States', 8);



#Inserts for Best Western hotels (8) 
INSERT INTO hotels(address, chainName, city, country, star_rating, num_rooms, phoneNumber) VALUES 
('185 Watt Place', 'Best Western', 'Regina', 'Canada', 2, 5, '1-800-604-5668'),
('267 Margrave Street', 'Best Western', 'Surprise', 'United States', 1, 5, '1-800-848-9699'),
('17 Harriet Avenue', 'Best Western', 'Van Nuys', 'United States', 5, 5, '1-800-744-5529'),
('240 Denslowe Way', 'Best Western', 'Deer Valley', 'United States', 5, 5, '1-800-773-2133'),
('266 Badger Way', 'Best Western', 'Regina', 'Canada', 4, 5, '1-800-1000-6279'),
('256 Bepler Way', 'Best Western', 'Santa Clara', 'United States', 4, 5, '1-800-598-4133'),
('114 Parkhurst Way', 'Best Western', 'Hampton', 'United States', 3, 5, '1-800-761-4508'),
('307 Lily Way', 'Best Western', 'Tacoma', 'United States', 2, 5, '1-800-201-5706'),
#Inserts for Value Motels hotels (9) 
('293 Girard Avenue', 'Value Motels', 'Oshawa', 'United States', 3, 5, '1-800-900-1691'),
('71 Cerritos Place', 'Value Motels', 'Oshawa', 'Canada', 2, 5, '1-800-934-3187'),
('122 Marcy Boulevard', 'Value Motels', 'Arlington', 'United States', 5, 5, '1-800-938-3120'),
('121 Wheeler Way', 'Value Motels', 'Orlando', 'United States', 3, 5, '1-800-169-9787'),
('244 Modoc Street', 'Value Motels', 'Allentown', 'United States', 5, 5, '1-800-124-1901'),
('253 Wabash Boulevard', 'Value Motels', 'East Flatbush', 'United States', 5, 5, '1-800-219-3239'),
('56 Circular Boulevard', 'Value Motels', 'Albuquerque', 'United States', 3, 5, '1-800-782-2275'),
('214 Danton Place', 'Value Motels', 'Burnaby', 'Canada', 5, 5, '1-800-692-6708'),
('176 Naglee Way', 'Value Motels', 'Gilbert', 'United States', 2, 5, '1-800-325-3102'),
#Inserts for Fairmont Hotels hotels (8)
('127 Hicks Place', 'Fairmont Hotels', 'Columbus', 'United States', 5, 5, '1-800-605-8683'),
('220 Baker Street', 'Fairmont Hotels', 'Portland', 'United States', 2, 5, '1-800-679-3547'),
('293 Pizarro Street', 'Fairmont Hotels', 'Warren', 'United States', 1, 5, '1-800-377-4984'),
('261 Miley Avenue', 'Fairmont Hotels', 'Alexandria', 'United States', 4, 5, '1-800-994-1260'),
('80 28Th Avenue', 'Fairmont Hotels', 'Long Beach', 'United States', 5, 5, '1-800-101-2677'),
('160 Harding Place', 'Fairmont Hotels', 'Atlanta', 'United States', 4, 5, '1-800-393-7224'),
('161 Denslowe Avenue', 'Fairmont Hotels', 'Pittsburgh', 'United States', 3, 5, '1-800-948-4222'),
('254 Faith Boulevard', 'Fairmont Hotels', 'Sheepshead Bay', 'United States', 1, 5, '1-800-903-8963'),
#Inserts for Bizarre Accommodations hotels (8)
('248 Ord Boulevard', 'Bizarre Accommodations', 'Charleston', 'United States', 1, 5, '1-800-278-2585'),
('122 Bay Place', 'Bizarre Accommodations', 'Yonkers', 'United States', 4, 5, '1-800-823-8690'),
('177 Mirabel Street', 'Bizarre Accommodations', 'Charleston', 'United States', 4, 5, '1-800-779-5376'),
('84 Aladdin Boulevard', 'Bizarre Accommodations', 'Ontario', 'United States', 2, 5, '1-800-550-7504'),
('161 Jessie Way', 'Bizarre Accommodations', 'Maryvale', 'United States', 4, 5, '1-800-260-3722'),
('273 Clipper Avenue', 'Bizarre Accommodations', 'Moreno Valley', 'United States', 3, 5, '1-800-563-6531'),
('314 Burlwood Street', 'Bizarre Accommodations', 'Bellevue', 'United States', 1, 5, '1-800-895-4868'),
('65 Dunnes Boulevard', 'Bizarre Accommodations', 'Milwaukee', 'United States', 5, 5, '1-800-353-2479'),
#Inserts for Horrible Value Hotels hotels (8)
('72 09Th Place', 'Horrible Value Hotels', 'San Diego', 'United States', 3, 5, '1-800-639-3516'),
('112 Flint Place', 'Horrible Value Hotels', 'San Diego', 'United States', 3, 5, '1-800-485-6535'),
('18 Muir Way', 'Horrible Value Hotels', 'Chandler', 'United States', 3, 5, '1-800-200-7008'),
('302 Overlook Boulevard', 'Horrible Value Hotels', 'Santa Rosa', 'United States', 5, 5, '1-800-839-8130'),
('148 Taylor Avenue', 'Horrible Value Hotels', 'Boise', 'United States', 2, 5, '1-800-756-8669'),
('180 Lundys Avenue', 'Horrible Value Hotels', 'Spokane', 'United States', 4, 5, '1-800-309-3947'),
('192 Crescent Avenue', 'Horrible Value Hotels', 'Boston', 'United States', 2, 5, '1-800-896-6768'),
('98 Fernandez Avenue', 'Horrible Value Hotels', 'Roseville', 'United States', 1, 5, '1-800-981-3005');

#Inserting rooms per hotel
INSERT INTO rooms(room_num, hotel, price, capacity, view_type, amenities, expandable) VALUES
(1, '185 Watt Place', 180.44, 1, 'Sea', NULL, true),
(2, '185 Watt Place', 402.23, 2, NULL, NULL, false),
(3, '185 Watt Place', 557.17, 3, 'Mountain', 'TV, Desk', false),
(4, '185 Watt Place', 265.32, 4, 'Sea', NULL, false),
(5, '185 Watt Place', 249.52, 5, NULL, 'TV, Desk', true),
(1, '267 Margrave Street', 531.28, 1, 'Sea', NULL, false),
(2, '267 Margrave Street', 511.49, 2, 'Sea', NULL, true),
(3, '267 Margrave Street', 242.6, 3, 'Sea', NULL, true),
(4, '267 Margrave Street', 397.19, 4, NULL, 'TV, Desk', false),
(5, '267 Margrave Street', 358.49, 5, NULL, 'TV, Desk', false),
(1, '17 Harriet Avenue', 527.16, 1, 'Mountain', 'TV, Desk', true),
(2, '17 Harriet Avenue', 230.05, 2, 'Mountain', 'TV, Desk', false),
(3, '17 Harriet Avenue', 390.28, 3, NULL, 'TV, Desk', true),
(4, '17 Harriet Avenue', 311.13, 4, 'Sea', 'TV, Desk', true),
(5, '17 Harriet Avenue', 138.92, 5, NULL, NULL, true),
(1, '240 Denslowe Way', 165.48, 1, 'Sea', NULL, true),
(2, '240 Denslowe Way', 301.42, 2, NULL, 'TV, Desk', false),
(3, '240 Denslowe Way', 212.47, 3, NULL, 'TV, Desk', true),
(4, '240 Denslowe Way', 252.01, 4, 'Sea', 'TV, Desk', false),
(5, '240 Denslowe Way', 526.8, 5, 'Sea', 'TV, Desk', false),
(1, '266 Badger Way', 455.38, 1, 'Sea', NULL, true),
(2, '266 Badger Way', 501.2, 2, 'Mountain', NULL, true),
(3, '266 Badger Way', 493.64, 3, 'Mountain', 'TV, Desk', true),
(4, '266 Badger Way', 453.19, 4, NULL, 'TV, Desk', false),
(5, '266 Badger Way', 443.38, 5, NULL, 'TV, Desk', false),
(1, '256 Bepler Way', 302.46, 1, 'Mountain', NULL, true),
(2, '256 Bepler Way', 179.95, 2, 'Sea', 'TV, Desk', false),
(3, '256 Bepler Way', 269.07, 3, 'Sea', 'TV, Desk', true),
(4, '256 Bepler Way', 217.5, 4, NULL, NULL, false),
(5, '256 Bepler Way', 317.07, 5, 'Sea', 'TV, Desk', false),
(1, '114 Parkhurst Way', 427.77, 1, 'Sea', NULL, true),
(2, '114 Parkhurst Way', 316.72, 2, 'Sea', NULL, false),
(3, '114 Parkhurst Way', 371.07, 3, NULL, NULL, true),
(4, '114 Parkhurst Way', 411.85, 4, 'Sea', 'TV, Desk', true),
(5, '114 Parkhurst Way', 563.19, 5, 'Sea', NULL, true),
(1, '307 Lily Way', 537.12, 1, NULL, NULL, false),
(2, '307 Lily Way', 100.57, 2, 'Mountain', NULL, false),
(3, '307 Lily Way', 593.96, 3, NULL, NULL, true),
(4, '307 Lily Way', 474.59, 4, 'Sea', NULL, false),
(5, '307 Lily Way', 103.56, 5, 'Sea', NULL, false),
(1, '293 Girard Avenue', 173.19, 1, 'Sea', NULL, true),
(2, '293 Girard Avenue', 176.91, 2, 'Mountain', 'TV, Desk', false),
(3, '293 Girard Avenue', 371.7, 3, 'Sea', 'TV, Desk', true),
(4, '293 Girard Avenue', 279.17, 4, NULL, NULL, false),
(5, '293 Girard Avenue', 131.82, 5, 'Mountain', 'TV, Desk', false),
(1, '71 Cerritos Place', 507.97, 1, 'Mountain', 'TV, Desk', false),
(2, '71 Cerritos Place', 597.48, 2, NULL, NULL, false),
(3, '71 Cerritos Place', 399.02, 3, 'Mountain', 'TV, Desk', true),
(4, '71 Cerritos Place', 376.27, 4, 'Mountain', 'TV, Desk', true),
(5, '71 Cerritos Place', 293.29, 5, 'Sea', 'TV, Desk', true),
(1, '122 Marcy Boulevard', 294.49, 1, 'Sea', NULL, false),
(2, '122 Marcy Boulevard', 212.41, 2, 'Mountain', 'TV, Desk', false),
(3, '122 Marcy Boulevard', 316.71, 3, 'Sea', 'TV, Desk', false),
(4, '122 Marcy Boulevard', 411.16, 4, 'Mountain', 'TV, Desk', true),
(5, '122 Marcy Boulevard', 429.09, 5, 'Sea', NULL, false),
(1, '121 Wheeler Way', 538.55, 1, 'Sea', 'TV, Desk', true),
(2, '121 Wheeler Way', 517.65, 2, 'Sea', 'TV, Desk', false),
(3, '121 Wheeler Way', 172.23, 3, NULL, 'TV, Desk', true),
(4, '121 Wheeler Way', 237.14, 4, 'Sea', NULL, true),
(5, '121 Wheeler Way', 163.58, 5, NULL, 'TV, Desk', false),
(1, '244 Modoc Street', 137.14, 1, 'Sea', NULL, true),
(2, '244 Modoc Street', 505.53, 2, 'Sea', 'TV, Desk', true),
(3, '244 Modoc Street', 453.04, 3, 'Sea', NULL, true),
(4, '244 Modoc Street', 203.65, 4, 'Mountain', 'TV, Desk', true),
(5, '244 Modoc Street', 250.9, 5, NULL, 'TV, Desk', false),
(1, '253 Wabash Boulevard', 398.1, 1, NULL, NULL, false),
(2, '253 Wabash Boulevard', 121.47, 2, NULL, 'TV, Desk', false),
(3, '253 Wabash Boulevard', 104.99, 3, 'Mountain', 'TV, Desk', true),
(4, '253 Wabash Boulevard', 329.32, 4, NULL, NULL, false),
(5, '253 Wabash Boulevard', 133.12, 5, 'Sea', 'TV, Desk', false),
(1, '56 Circular Boulevard', 314.18, 1, NULL, 'TV, Desk', true),
(2, '56 Circular Boulevard', 236.3, 2, NULL, NULL, true),
(3, '56 Circular Boulevard', 115.13, 3, NULL, NULL, false),
(4, '56 Circular Boulevard', 435.88, 4, NULL, 'TV, Desk', false),
(5, '56 Circular Boulevard', 225.52, 5, NULL, NULL, true),
(1, '214 Danton Place', 472.99, 1, NULL, NULL, false),
(2, '214 Danton Place', 354.99, 2, 'Sea', 'TV, Desk', false),
(3, '214 Danton Place', 130.87, 3, NULL, 'TV, Desk', true),
(4, '214 Danton Place', 132.08, 4, 'Mountain', 'TV, Desk', true),
(5, '214 Danton Place', 547.62, 5, 'Mountain', 'TV, Desk', true),
(1, '176 Naglee Way', 397.55, 1, NULL, 'TV, Desk', false),
(2, '176 Naglee Way', 534.16, 2, 'Mountain', NULL, false),
(3, '176 Naglee Way', 399.49, 3, 'Sea', 'TV, Desk', true),
(4, '176 Naglee Way', 545.86, 4, 'Mountain', 'TV, Desk', true),
(5, '176 Naglee Way', 212.0, 5, 'Mountain', 'TV, Desk', false),
(1, '127 Hicks Place', 570.59, 1, 'Mountain', 'TV, Desk', false),
(2, '127 Hicks Place', 293.18, 2, 'Sea', 'TV, Desk', false),
(3, '127 Hicks Place', 109.77, 3, 'Sea', NULL, true),
(4, '127 Hicks Place', 365.58, 4, 'Sea', 'TV, Desk', false),
(5, '127 Hicks Place', 417.57, 5, NULL, NULL, false),
(1, '220 Baker Street', 515.41, 1, NULL, NULL, true),
(2, '220 Baker Street', 576.36, 2, NULL, NULL, true),
(3, '220 Baker Street', 546.39, 3, NULL, 'TV, Desk', false),
(4, '220 Baker Street', 286.85, 4, 'Sea', 'TV, Desk', false),
(5, '220 Baker Street', 188.29, 5, 'Sea', NULL, false),
(1, '293 Pizarro Street', 188.17, 1, NULL, 'TV, Desk', false),
(2, '293 Pizarro Street', 360.01, 2, 'Mountain', 'TV, Desk', true),
(3, '293 Pizarro Street', 526.71, 3, 'Mountain', 'TV, Desk', false),
(4, '293 Pizarro Street', 500.7, 4, NULL, 'TV, Desk', false),
(5, '293 Pizarro Street', 560.51, 5, NULL, NULL, true),
(1, '261 Miley Avenue', 515.83, 1, 'Sea', 'TV, Desk', false),
(2, '261 Miley Avenue', 350.56, 2, NULL, NULL, true),
(3, '261 Miley Avenue', 467.05, 3, 'Sea', NULL, true),
(4, '261 Miley Avenue', 251.5, 4, NULL, NULL, true),
(5, '261 Miley Avenue', 143.84, 5, 'Mountain', NULL, false),
(1, '80 28Th Avenue', 213.58, 1, 'Sea', NULL, true),
(2, '80 28Th Avenue', 445.76, 2, 'Sea', 'TV, Desk', false),
(3, '80 28Th Avenue', 258.57, 3, 'Sea', NULL, true),
(4, '80 28Th Avenue', 235.41, 4, 'Sea', 'TV, Desk', false),
(5, '80 28Th Avenue', 176.7, 5, 'Sea', 'TV, Desk', true),
(1, '160 Harding Place', 556.12, 1, 'Mountain', NULL, false),
(2, '160 Harding Place', 325.78, 2, 'Mountain', 'TV, Desk', true),
(3, '160 Harding Place', 271.37, 3, NULL, 'TV, Desk', false),
(4, '160 Harding Place', 522.06, 4, 'Mountain', NULL, false),
(5, '160 Harding Place', 173.39, 5, 'Mountain', 'TV, Desk', false),
(1, '161 Denslowe Avenue', 208.37, 1, 'Sea', NULL, true),
(2, '161 Denslowe Avenue', 341.36, 2, NULL, 'TV, Desk', true),
(3, '161 Denslowe Avenue', 124.36, 3, NULL, NULL, true),
(4, '161 Denslowe Avenue', 383.01, 4, NULL, 'TV, Desk', true),
(5, '161 Denslowe Avenue', 592.99, 5, 'Mountain', 'TV, Desk', false),
(1, '254 Faith Boulevard', 287.13, 1, 'Sea', 'TV, Desk', false),
(2, '254 Faith Boulevard', 194.59, 2, NULL, 'TV, Desk', false),
(3, '254 Faith Boulevard', 319.22, 3, NULL, NULL, false),
(4, '254 Faith Boulevard', 296.09, 4, 'Mountain', 'TV, Desk', true),
(5, '254 Faith Boulevard', 494.65, 5, 'Sea', 'TV, Desk', false),
(1, '248 Ord Boulevard', 146.5, 1, 'Sea', NULL, false),
(2, '248 Ord Boulevard', 331.63, 2, 'Mountain', 'TV, Desk', true),
(3, '248 Ord Boulevard', 101.26, 3, 'Sea', NULL, true),
(4, '248 Ord Boulevard', 199.21, 4, 'Mountain', 'TV, Desk', true),
(5, '248 Ord Boulevard', 218.83, 5, 'Mountain', NULL, false),
(1, '122 Bay Place', 116.69, 1, 'Mountain', NULL, false),
(2, '122 Bay Place', 120.33, 2, 'Mountain', 'TV, Desk', false),
(3, '122 Bay Place', 596.52, 3, NULL, NULL, true),
(4, '122 Bay Place', 400.21, 4, NULL, 'TV, Desk', false),
(5, '122 Bay Place', 108.69, 5, 'Sea', 'TV, Desk', true),
(1, '177 Mirabel Street', 330.71, 1, NULL, NULL, false),
(2, '177 Mirabel Street', 208.19, 2, 'Sea', NULL, true),
(3, '177 Mirabel Street', 218.39, 3, NULL, NULL, true),
(4, '177 Mirabel Street', 287.16, 4, NULL, NULL, false),
(5, '177 Mirabel Street', 308.06, 5, 'Mountain', NULL, true),
(1, '84 Aladdin Boulevard', 472.31, 1, 'Mountain', NULL, true),
(2, '84 Aladdin Boulevard', 526.55, 2, 'Sea', NULL, true),
(3, '84 Aladdin Boulevard', 177.78, 3, NULL, NULL, true),
(4, '84 Aladdin Boulevard', 482.36, 4, NULL, NULL, false),
(5, '84 Aladdin Boulevard', 118.56, 5, 'Mountain', NULL, true),
(1, '161 Jessie Way', 529.21, 1, NULL, NULL, false),
(2, '161 Jessie Way', 344.1, 2, 'Mountain', 'TV, Desk', false),
(3, '161 Jessie Way', 130.31, 3, 'Sea', NULL, false),
(4, '161 Jessie Way', 425.64, 4, 'Sea', 'TV, Desk', true),
(5, '161 Jessie Way', 167.69, 5, 'Mountain', NULL, true),
(1, '273 Clipper Avenue', 495.68, 1, 'Mountain', NULL, false),
(2, '273 Clipper Avenue', 197.83, 2, 'Mountain', NULL, false),
(3, '273 Clipper Avenue', 588.67, 3, 'Sea', NULL, true),
(4, '273 Clipper Avenue', 205.75, 4, 'Sea', NULL, false),
(5, '273 Clipper Avenue', 285.57, 5, 'Sea', 'TV, Desk', true),
(1, '314 Burlwood Street', 310.9, 1, NULL, 'TV, Desk', true),
(2, '314 Burlwood Street', 490.75, 2, NULL, NULL, true),
(3, '314 Burlwood Street', 389.14, 3, NULL, NULL, false),
(4, '314 Burlwood Street', 275.79, 4, 'Mountain', NULL, true),
(5, '314 Burlwood Street', 285.53, 5, 'Sea', 'TV, Desk', true),
(1, '65 Dunnes Boulevard', 329.56, 1, 'Sea', NULL, false),
(2, '65 Dunnes Boulevard', 554.18, 2, 'Sea', 'TV, Desk', true),
(3, '65 Dunnes Boulevard', 513.74, 3, NULL, NULL, false),
(4, '65 Dunnes Boulevard', 440.31, 4, NULL, 'TV, Desk', true),
(5, '65 Dunnes Boulevard', 403.17, 5, 'Sea', NULL, true),
(1, '72 09Th Place', 512.32, 1, NULL, NULL, false),
(2, '72 09Th Place', 224.73, 2, 'Mountain', NULL, false),
(3, '72 09Th Place', 564.98, 3, NULL, 'TV, Desk', false),
(4, '72 09Th Place', 224.56, 4, NULL, 'TV, Desk', false),
(5, '72 09Th Place', 365.24, 5, NULL, NULL, false),
(1, '112 Flint Place', 342.35, 1, 'Mountain', NULL, true),
(2, '112 Flint Place', 201.2, 2, NULL, NULL, false),
(3, '112 Flint Place', 301.29, 3, 'Sea', 'TV, Desk', true),
(4, '112 Flint Place', 502.26, 4, 'Sea', 'TV, Desk', true),
(5, '112 Flint Place', 104.01, 5, 'Sea', NULL, true),
(1, '18 Muir Way', 479.65, 1, NULL, 'TV, Desk', false),
(2, '18 Muir Way', 498.14, 2, 'Mountain', NULL, true),
(3, '18 Muir Way', 410.26, 3, 'Sea', 'TV, Desk', false),
(4, '18 Muir Way', 487.27, 4, 'Mountain', NULL, false),
(5, '18 Muir Way', 395.12, 5, 'Mountain', NULL, false),
(1, '302 Overlook Boulevard', 115.35, 1, 'Mountain', NULL, true),
(2, '302 Overlook Boulevard', 133.67, 2, 'Mountain', NULL, false),
(3, '302 Overlook Boulevard', 494.21, 3, 'Sea', 'TV, Desk', true),
(4, '302 Overlook Boulevard', 592.68, 4, 'Sea', NULL, false),
(5, '302 Overlook Boulevard', 432.16, 5, 'Sea', 'TV, Desk', false),
(1, '148 Taylor Avenue', 289.5, 1, 'Mountain', NULL, true),
(2, '148 Taylor Avenue', 208.64, 2, 'Sea', 'TV, Desk', true),
(3, '148 Taylor Avenue', 330.68, 3, NULL, 'TV, Desk', true),
(4, '148 Taylor Avenue', 101.14, 4, 'Mountain', NULL, true),
(5, '148 Taylor Avenue', 509.34, 5, 'Sea', NULL, true),
(1, '180 Lundys Avenue', 292.69, 1, 'Mountain', 'TV, Desk', false),
(2, '180 Lundys Avenue', 371.51, 2, NULL, NULL, true),
(3, '180 Lundys Avenue', 520.06, 3, NULL, 'TV, Desk', true),
(4, '180 Lundys Avenue', 113.66, 4, 'Sea', 'TV, Desk', true),
(5, '180 Lundys Avenue', 455.22, 5, 'Mountain', NULL, true),
(1, '192 Crescent Avenue', 105.92, 1, 'Mountain', NULL, false),
(2, '192 Crescent Avenue', 597.2, 2, 'Mountain', 'TV, Desk', true),
(3, '192 Crescent Avenue', 587.04, 3, NULL, 'TV, Desk', true),
(4, '192 Crescent Avenue', 255.6, 4, NULL, NULL, false),
(5, '192 Crescent Avenue', 410.44, 5, NULL, 'TV, Desk', true),
(1, '98 Fernandez Avenue', 268.42, 1, 'Sea', NULL, true),
(2, '98 Fernandez Avenue', 316.3, 2, 'Mountain', NULL, true),
(3, '98 Fernandez Avenue', 105.99, 3, 'Mountain', NULL, true),
(4, '98 Fernandez Avenue', 505.93, 4, 'Mountain', NULL, false),
(5, '98 Fernandez Avenue', 452.51, 5, 'Sea', NULL, true);

INSERT INTO employees (SSN, full_name, address,works_at, role) VALUES
(12345, 'John Smith','211 Fargo Place' ,'185 Watt Place','Manager'),
(23456, 'Robert Downey Jr', '291 Eastwood Street','267 Margrave Street','Manager'),
(34567, 'Tony Stark', '173 Blythdale Way','17 Harriet Avenue','Manager'),
(45678, 'Griffin Taylor','200 Oceanview Place','240 Denslowe Way','Manager'),
(56789, 'Daanish Khan', '45 Bengal Avenue','266 Badger Way','Manager'),
(67890, 'Jason Lam', '202 Ludlow Boulevard','256 Bepler Way','Manager'),
(78901, 'Smith John', '134 Fort Boulevard','114 Parkhurst Way','Manager'),
(89012, 'Jane Doe', '41 Kittredge Place','307 Lily Way','Manager'),
#Value Motels
(90123, 'Jane Smith', '117 Medical Way','293 Girard Avenue','Manager'),
(11234, 'John Doe', '135 Letterman Place','71 Cerritos Place','Manager'),
(99999, 'Clark Kent', '207 Hays Way','122 Marcy Boulevard','Manager'),
(11111, 'Bruce Wayne', '159 Wentworth Street','121 Wheeler Way','Manager'),
(22222, 'Wayne Bruce', '22 Lori Way','244 Modoc Street','Manager'),
(33333, 'Julius Caesar', '317 Colonial Street','253 Wabash Boulevard','Manager'),
(44444, 'Justin Trudeau', '93 Moss Place','56 Circular Boulevard','Manager'),
(55555, 'Wallace Gromit', '107 Frank Street','214 Danton Place','Manager'),
(66666, 'Dean Wilder', '107 Clarke Way','176 Naglee Way','Manager'),
#Fairmont
(77777, 'Amy Morton', '151 Greenwich Boulevard','127 Hicks Place','Manager'),
(88888, 'Kelly Summer', '241 Stockton Way','220 Baker Street','Manager'),
(10101, 'Chase Morgan', '111 Bristol Avenue','293 Pizarro Street','Manager'),
(12121, 'Noah Armstrong', '31 Turk Boulevard','261 Miley Avenue','Manager'),
(21212, 'Otis Lennon', '123 Cranleigh Way','80 28Th Avenue','Manager'),
(23232, 'John Lennon', '85 Clyde Way','160 Harding Place','Manager'),
(32323, 'Matthew Casey', '31 Cordova Avenue','161 Denslowe Avenue','Manager'),
(34343, 'Silvie Brett', '226 Hodges Street','254 Faith Boulevard','Manager'),
#Bizarre Accomodations
(43434, 'Stella Kidd', '48 09Th Place','248 Ord Boulevard','Manager'),
(45454, 'Joe Cruz', '20 Stern Way','122 Bay Place','Manager'),
(54545, 'Peter Mills', '233 Bennington Place','177 Mirabel Street','Manager'),
(56565, 'Darren Ritter', '218 Castro Place','84 Aladdin Boulevard','Manager'),
(65656, 'Blake Gallow', '99 Prague Avenue','161 Jessie Way','Manager'),
(67676, 'Cindy Herman', '310 Rickard Street','273 Clipper Avenue','Manager'),
(76767, 'Emily Foster', '129 Powhattan Place','314 Burlwood Street','Manager'),
(78787, 'Jeff Clark','72 Executive Boulevard' ,'65 Dunnes Boulevard','Manager'),
#Horrible Value
(87878, 'Violet Mikami', '221 Great Street','72 09Th Place','Manager'),
(89898, 'Renee Roice', '152 Unnamed Avenue','112 Flint Place','Manager'),
(98989, 'Evan Hawkens', '214 Long Way','18 Muir Way','Manager'),
(90909, 'Annabelle Dez', '159 Pico Way','302 Overlook Boulevard','Manager'),
(19090, 'Lesley Chez', '129 Mccoppin Way','148 Taylor Avenue','Manager'),
(20003, 'Gabriella Dawson', '21 Hussey Avenue','180 Lundys Avenue','Manager'),
(10593, 'Aaron Lindsey','215 Saturn Street' ,'192 Crescent Avenue','Manager'),
(29304, 'Anakin Skywalker', '145 Decker Street','98 Fernandez Avenue','Manager');

SET foreign_key_checks = 0;
UPDATE hotels SET manager=12345 WHERE address='185 Watt Place';
UPDATE hotels SET manager=23456 WHERE address='267 Margrave Street';
UPDATE hotels SET manager=34567 WHERE address='17 Harriet Avenue';
UPDATE hotels SET manager=45678 WHERE address='240 Denslowe Way';
UPDATE hotels SET manager=56789 WHERE address='266 Badger Way';
UPDATE hotels SET manager=67890 WHERE address='256 Bepler Way';
UPDATE hotels SET manager=78901 WHERE address='114 Parkhurst Way';
UPDATE hotels SET manager=89012 WHERE address='307 Lily Way';
#Value Motels
UPDATE hotels SET manager=90123 WHERE address='293 Girard Avenue';
UPDATE hotels SET manager=11234 WHERE address='71 Cerritos Place';
UPDATE hotels SET manager=99999 WHERE address='122 Marcy Boulevard';
UPDATE hotels SET manager=11111 WHERE address='121 Wheeler Way';
UPDATE hotels SET manager=22222 WHERE address='244 Modoc Street';
UPDATE hotels SET manager=33333 WHERE address='253 Wabash Boulevard';
UPDATE hotels SET manager=44444 WHERE address='56 Circular Boulevard';
UPDATE hotels SET manager=55555 WHERE address='214 Danton Place';
UPDATE hotels SET manager=66666 WHERE address='176 Naglee Way';
#Fairmont
UPDATE hotels SET manager=77777 WHERE address='127 Hicks Place';
UPDATE hotels SET manager=88888 WHERE address='220 Baker Street';
UPDATE hotels SET manager=10101 WHERE address='293 Pizarro Street';
UPDATE hotels SET manager=12121 WHERE address='261 Miley Avenue';
UPDATE hotels SET manager=21212 WHERE address='80 28Th Avenue';
UPDATE hotels SET manager=23232 WHERE address='160 Harding Place';
UPDATE hotels SET manager=32323 WHERE address='161 Denslowe Avenue';
UPDATE hotels SET manager=34343 WHERE address='254 Faith Boulevard';
#Bizarre Accomodations
UPDATE hotels SET manager=43434 WHERE address='248 Ord Boulevard';
UPDATE hotels SET manager=45454 WHERE address='122 Bay Place';
UPDATE hotels SET manager=54545 WHERE address='177 Mirabel Street';
UPDATE hotels SET manager=56565 WHERE address='84 Aladdin Boulevard';
UPDATE hotels SET manager=65656 WHERE address='161 Jessie Way';
UPDATE hotels SET manager=67676 WHERE address='273 Clipper Avenue';
UPDATE hotels SET manager=76767 WHERE address='314 Burlwood Street';
UPDATE hotels SET manager=78787 WHERE address='65 Dunnes Boulevard';
#Horrible Value
UPDATE hotels SET manager=87878 WHERE address='72 09Th Place';
UPDATE hotels SET manager=89898 WHERE address='112 Flint Place';
UPDATE hotels SET manager=98989 WHERE address='18 Muir Way';
UPDATE hotels SET manager=90909 WHERE address='302 Overlook Boulevard';
UPDATE hotels SET manager=19090 WHERE address='148 Taylor Avenue';
UPDATE hotels SET manager=20003 WHERE address='180 Lundys Avenue';
UPDATE hotels SET manager=10593 WHERE address='192 Crescent Avenue';
UPDATE hotels SET manager=29304 WHERE address='98 Fernandez Avenue';
SET foreign_key_checks = 1;