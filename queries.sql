#Selects for queries on website
#1
SELECT room_num, hotel FROM rooms WHERE hotel = hName AND ;
#2 Basic insert, where for a renting isPaid is set as TRUE automatically because it is being RENTED
INSERT INTO bookings(room_num, hotel, customer, isPaid, startDate, endDate) Value (a1,a2,a3,TRUE,a5,a6);
#3
INSERT INTO bookings(room_num, hotel, customer, isPaid, startDate, endDate) Value (a1,a2,a3,a4,a5,a6);
#4
UPDATE bookings SET isPaid = TRUE WHERE customer = id AND room_num = room AND hotel = hName AND startDate = startD AND endDate = endD;
#5 Reg_date is set automatically 
INSERT INTO customers (SSN,full_name, address) VALUE (a1,a2,a3);
#6 to delete hotels, chains, etc the delete statements, but add triggers to delete hotels if you delete a chain, or delete rooms if you delete a hotel
DELETE FROM hotelchains where name = nameToDel;
DELETE FROM hotels where address = addToDel;
DELETE FROM rooms where room_num = numToDel AND hotel = hotelToDel;

#These lines must be run to add the triggers on the db, INCLUDING THE delimiters
DELIMITER $$
CREATE TRIGGER delHotels  BEFORE DELETE ON hotelchains
       FOR EACH ROW 
       BEGIN
			delete from hotels where chainName = old.name;
	   END$$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER delRooms  BEFORE DELETE ON hotels
       FOR EACH ROW 
       BEGIN
			delete from rooms where hotel = old.address;
	   END$$
DELIMITER ;
#7

#8
UPDATE bookings SET isPaid = TRUE WHERE customer = id AND room_num = room AND hotel = hName AND startDate = startD AND endDate = endD;
#9 (Value is the login check)
SELECT 1 FROM customers WHERE SSN = value; 
SELECT 1 FROM employees WHERE SSN = value; 

#View to see available rooms at each hotel in each city
CREATE VIEW availableRooms as 
select b.address,b.city,b.country,
  sum(case when a.status = 'Available' then 1 else 0 end) as Available
from rooms a, hotels b
where a.hotel = b.address
group by b.address;

#View to see capacity of rooms at a specific hotel change "b.address" in the where to a variable
CREATE VIEW roomsPerHotel as 
select b.address,a.room_num,a.capacity
from rooms a, hotels b
where a.hotel = b.address
group by b.address, a.room_num;