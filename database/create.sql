CREATE TABLE info (
  RegNo integer primary key NOT NULL,
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

CREATE TABLE dailylog (
  RegNo integer NOT NULL,
  "Time" date NOT NULL,
  Vehicle_no character varying(10),
  flag character varying(3) NOT NULL,
	
	constraint fk_student_data
	foreign key (RegNo)
	references info(RegNo)
	on delete set null
);

CREATE TABLE login (
  username primary key character varying(50),
  password character varying(50)
);

CREATE TABLE regnobarcode (
  RegNo integer NOT NULL,
  BarCode character varying(20) NOT NULL,
	
	constraint fk_barcode_student
	foreign key (RegNo)
	references info(RegNo)
	on delete cascade
);

CREATE TABLE visitors_log (
  ID serial primary key NOT NULL,
  Name character varying(30) NOT NULL,
  Cnic character varying(20) NOT NULL,
  "Time" date NOT NULL,
  Vehicle_no character varying(10),
  flag character varying(3) NOT NULL
);

CREATE TABLE vehicles (
	vehicle_no varchar(10) primary key not null,
	reg_no int not null,
	cnic_no character varying(20) not null,
	
	constraint fk_vehicle_student
	foreign key (reg_no)
	references info(RegNo)
	on delete cascade,

	constraint fk_vehicle_visitor
	foreign key (cnic_no)
	references visitors_log(Cnic)
	on delete cascade
);
