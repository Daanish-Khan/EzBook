#CREATE SCHEMA hotelProjectSchema;

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
  status VARCHAR(100) NOT NULL
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
  startDate datetime NOT NULL,
  endDate datetime NOT NULL
);

CREATE TABLE emails (#stores all emails for chains and hotels
	chainName VARCHAR(255),
	FOREIGN KEY(chainName) REFERENCES hotelChains (name),
    PRIMARY KEY(chainName, email),
    email VARCHAR(50) NOT NULL
);

CREATE TABLE phoneNumbers (#stores all phone numbers for chains
	chainName VARCHAR(255) NOT NULL,
    hotelName VARCHAR(255),
	PRIMARY KEY (chainName, hotelName, phoneNumber),
	FOREIGN KEY (chainName) REFERENCES hotelChains (name),
    FOREIGN KEY (hotelName) REFERENCES hotels (address),
    phoneNumber VARCHAR(50) NOT NULL
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