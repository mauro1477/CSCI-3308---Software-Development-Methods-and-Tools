--Discriptoin: When the user logins in he needs to create a profile
--email does not need a value
CREATE TABLE userProfileTable(
	user_ID SERIAL NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	last_nae VARCHAR(50) NOT NULL,
  gender VARCHAR(6) NOT NULL,
  email VARCHAR(150),
	date_of_birth DATE NOT NULL,
  user_name VARCHAR(50) NOT NULL,
  user_password VARCHAR(50) NOT NULL
);

insert into userProfileTable (first_name, last_name, email, gender, date_of_birth , user_name, user_password) values ('Vladimir', 'Allatt', 'vallatt0@cmu.edu', 'Male', '2019-03-10', 'vallatt0', 'tyEuoHKhYC');
insert into userProfileTable (first_name, last_name, email, gender, date_of_birth , user_name, user_password) values ('Saundra', 'Burch', 'sburch1@typepad.com', 'Female', '2019-01-13', 'sburch1', 'GZDVPmh1bw');
insert into userProfileTable (first_name, last_name, email, gender, date_of_birth , user_name, user_password) values ('Moise', 'Nani', 'mnani2@com.com', 'Male', '2019-05-08', 'mnani2', 'SPwdj0d');
insert into userProfileTable (first_name, last_name, email, gender, date_of_birth , user_name, user_password) values ('Rosaleen', 'Baldassi', 'rbaldassi3@cafepress.com', 'Female', '2019-03-05', 'rbaldassi3', 'YLUXfnOQZ7x');
insert into userProfileTable (first_name, last_name, email, gender, date_of_birth , user_name, user_password) values ('Wallace', 'Lanfare', 'wlanfare4@japanpost.jp', 'Male', '2019-07-19', 'wlanfare4', 'Ff3QlScL');
insert into userProfileTable (first_name, last_name, email, gender, date_of_birth , user_name, user_password) values ('Jorey', 'Letrange', 'jletrange5@livejournal.com', 'Female', '2019-06-07', 'jletrange5', 'UV8cB8');
insert into userProfileTable (first_name, last_name, email, gender, date_of_birth , user_name, user_password) values ('Arturo', 'Cuddon', 'acuddon6@discovery.com', 'Male', '2019-01-06', 'acuddon6', 'Y189z6FJFJQO');
insert into userProfileTable (first_name, last_name, email, gender, date_of_birth , user_name, user_password) values ('Rhetta', 'McTurley', 'rmcturley7@oakley.com', 'Female', '2019-04-14', 'rmcturley7', 'hfbGAFDL');
insert into userProfileTable (first_name, last_name, email, gender, date_of_birth , user_name, user_password) values ('Desirae', 'Caskey', 'dcaskey8@cocolog-nifty.com', 'Female', '2019-03-04', 'dcaskey8', 'VM05xYC5');
insert into userProfileTable (first_name, last_name, email, gender, date_of_birth , user_name, user_password) values ('Verne', 'Ropcke', 'vropcke9@soundcloud.com', 'Male', '2019-03-06', 'vropcke9', 'Hfbdap');

--Discription: We will need a table for the login in function, we don't need to pull everyone information just the informaiton below.The realtion will be with userProfile. This table will be used when the user logs in to the application.
--script: select user_id, user_name, user_password as loginTable from userprofiletable;
CREATE TABLE loginTable(
	user_ID INT,
  user_name VARCHAR(50) NOT NULL,
  user_password VARCHAR(50) NOT NULL
);

--Discription: Dish Table will only hold that specific dish information, the dishID we will use to relate it to its specfic ingredients for that specific dish, we will also hold a dishCount to count how many times that dish was ordered. We can calculate sales on the specifc dish with the dishCount and the price for that specific dish.
--Question: I still dont know how to use stamp the date and time to stamp the times the order was ordered
CREATE TABLE dishTable(
	dishID BIGSERIAL,
  dish_name VARCHAR(50) NOT NULL,
  dish_price DECIMAL,
  dish_count BIGSERIAL,
  dish_time_stamp TIMESTAMP
);
insert into dishTable(dish_name, dish_price) values('pizza', 10.69);

--Read the CSV POSTGRES COMMAND
--shelflife=# COPY foodGroups(food_group_ID, food_group_name) FROM '/Users/maurovargas/Documents/SHELFLIFE/foodGroups.csv' DELIMITER ',' CSV HEADER;
CREATE TABLE foodGroups(
  food_group_ID int NOT NULL PRIMARY KEY,
  food_group_name CHARACTER VARYING(50)
);


CREATE TABLE foodIngredients(
	food_group_ID int NOT NULL PRIMARY KEY,
  food_group_name CHARACTER VARYING(50)
)
