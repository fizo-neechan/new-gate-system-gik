
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
  username character varying(50),
  password character varying(50)
);

CREATE TABLE regnobarcode (
  RegNo integer NOT NULL,
  BarCode character varying(20) NOT NULL
);

CREATE TABLE visitors_log (
  ID integer NOT NULL,
  Name character varying(30) NOT NULL,
  Cnic character varying(20) NOT NULL,
  Date date NOT NULL,
  "Time" time without time zone NOT NULL,
  Vehicle_no character varying(10) NOT NULL,
  flag character varying(3) NOT NULL
);
