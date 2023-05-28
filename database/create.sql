
CREATE TABLE dailylog (
  RegNo integer NOT NULL,
  Name character varying(30) NOT NULL,
  Date date NOT NULL,
  "Time" time without time zone NOT NULL,
  Vehicle_no character varying(10) NOT NULL,
  flag character varying(3) NOT NULL
);

CREATE TABLE info (
  RegNo integer NOT NULL,
  PictureLink character varying(100) NOT NULL,
  Name character varying(50) NOT NULL,
  FatherName character varying(50) NOT NULL,
  NIC character varying(17) NOT NULL,
  Designation character varying(50) NOT NULL,
  Faculty_Dept character varying(50) NOT NULL,
  DOB character varying(50) NOT NULL,
  PermanentAddress character varying(100) NOT NULL,
  Contact_number character varying(30) NOT NULL,
  EmergencyContactName character varying(50) NOT NULL,
  EmergencyContactNumber character varying(50) NOT NULL,
  IdentificationMark character varying(100) NOT NULL,
  BloodGroup character varying(50) NOT NULL,
  Vehicle_no character varying(10) NOT NULL
);

CREATE TABLE login (
  username primary key character varying(50),
  password character varying(50)
);

CREATE TABLE regnobarcode (
  RegNo integer primary key NOT NULL,
  BarCode character varying(20) unique NOT NULL
);

CREATE TABLE visitors_log (
  ID serial primary key NOT NULL,
  Name character varying(30) NOT NULL,
  Cnic character varying(20) NOT NULL,
  Date date NOT NULL,
  "Time" time without time zone NOT NULL,
  Vehicle_no character varying(10) NOT NULL,
  flag character varying(3) NOT NULL
);


-- Alter the login table to change the character limit of the password column
ALTER TABLE login
  ALTER COLUMN password TYPE character varying(120);


create table car_log (
    Vehicle_no primary key varchar(10),
    driver_reg int,
    driver_cnic int,
    flag varchar(3) not null,
    vehicle_under varchar(10) not null

    constraint foreign key fk_vehicle_driver_reg
    (driver_reg) references info(RegNo),

    constraint foreign key fk_vehicle_driver_cnic
    (driver_cnic) references visitors_log(Cnic)
);

