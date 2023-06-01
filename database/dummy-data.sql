-- Dummy data for the info table
INSERT INTO info (RegNo, PictureLink, Name, FatherName, NIC, Designation, Faculty_Dept, DOB, PermanentAddress, Contact_number, EmergencyContactName, EmergencyContactNumber, IdentificationMark, BloodGroup, Vehicle_no)
VALUES
  (1, 'picture1.jpg', 'John Doe', 'Father Doe', '12345678901234567', 'Manager', 'Faculty of Engineering', '1990-01-01', '123 Main St', '1234567890', 'Emergency Contact 1', 'Emergency Contact Number 1', 'Scar on right hand', 'O+', 'ABC123'),
  (2, 'picture2.jpg', 'Jane Smith', 'Father Smith', '98765432109876543', 'Engineer', 'Faculty of Science', '1995-05-05', '456 Elm St', '9876543210', 'Emergency Contact 2', 'Emergency Contact Number 2', 'Birthmark on neck', 'A-', 'XYZ456'),
  -- Add more entries here...
  (3, 'picture3.jpg', 'Robert Johnson', 'Father Johnson', '45678901234567890', 'Doctor', 'Faculty of Medicine', '1985-03-15', '789 Oak St', '4567890123', 'Emergency Contact 3', 'Emergency Contact Number 3', 'Tattoo on arm', 'B+', 'DEF789'),
  (4, 'picture4.jpg', 'Emily Davis', 'Father Davis', '90123456789012345', 'Teacher', 'Faculty of Education', '1988-09-20', '321 Pine St', '9012345678', 'Emergency Contact 4', 'Emergency Contact Number 4', 'Mole on cheek', 'AB+', 'GHI012'),
  (5, 'picture5.jpg', 'Michael Wilson', 'Father Wilson', '23456789012345678', 'Manager', 'Faculty of Business', '1992-07-10', '654 Cedar St', '2345678901', 'Emergency Contact 5', 'Emergency Contact Number 5', 'Scars on back', 'O-', 'JKL345'),
  (6, 'picture6.jpg', 'Sarah Thompson', 'Father Thompson', '67890123456789012', 'Engineer', 'Faculty of Engineering', '1993-11-25', '987 Maple St', '6789012345', 'Emergency Contact 6', 'Emergency Contact Number 6', 'Birthmark on leg', 'A+', 'MNO678'),
  (7, 'picture7.jpg', 'William Clark', 'Father Clark', '12345678901234567', 'Teacher', 'Faculty of Education', '1987-02-28', '789 Oak St', '1234567890', 'Emergency Contact 7', 'Emergency Contact Number 7', 'Tattoo on arm', 'AB-', 'PQR901'),
  (8, 'picture8.jpg', 'Olivia Allen', 'Father Allen', '45678901234567890', 'Doctor', 'Faculty of Medicine', '1990-06-12', '321 Pine St', '4567890123', 'Emergency Contact 8', 'Emergency Contact Number 8', 'Mole on cheek', 'B-', 'STU234'),
  (9, 'picture9.jpg', 'James Turner', 'Father Turner', '90123456789012345', 'Engineer', 'Faculty of Engineering', '1994-08-03', '654 Cedar St', '9012345678', 'Emergency Contact 9', 'Emergency Contact Number 9', 'Scars on back', 'AB+', 'VWX567'),
  (10, 'picture10.jpg', 'Sophia Baker', 'Father Baker', '23456789012345678', 'Manager', 'Faculty of Business', '1989-12-07', '987 Maple St', '2345678901', 'Emergency Contact 10', 'Emergency Contact Number 10', 'Birthmark on leg', 'O+', 'YZA890');

-- Dummy data for the dailylog table
INSERT INTO dailylog (RegNo, "Time", Vehicle_no, flag)
VALUES
  (1, '2022-01-01', 'ABC123', 'IN'),
  (2, '2022-01-02', 'XYZ456', 'OUT'),
  -- Add more entries here...
  (3, '2022-01-03', 'DEF789', 'IN'),
  (4, '2022-01-04', 'GHI012', 'OUT'),
  (5, '2022-01-05', 'JKL345', 'IN'),
  (6, '2022-01-06', 'MNO678', 'OUT'),
  (7, '2022-01-07', 'PQR901', 'IN'),
  (8, '2022-01-08', 'STU234', 'OUT'),
  (9, '2022-01-09', 'VWX567', 'IN'),
  (10, '2022-01-10', 'YZA890', 'OUT');

-- Dummy data for the login table
INSERT INTO login (username, password)
VALUES
  ('user1', 'password1'),
  ('user2', 'password2'),
  -- Add more entries here...
  ('user3', 'password3'),
  ('user4', 'password4'),
  ('user5', 'password5'),
  ('user6', 'password6'),
  ('user7', 'password7'),
  ('user8', 'password8'),
  ('user9', 'password9'),
  ('user10', 'password10');

-- Dummy data for the regnobarcode table
INSERT INTO regnobarcode (RegNo, BarCode)
VALUES
  (1, '1234567890'),
  (2, '2345678901'),
  -- Add more entries here...
  (3, '3456789012'),
  (4, '4567890123'),
  (5, '5678901234'),
  (6, '6789012345'),
  (7, '7890123456'),
  (8, '8901234567'),
  (9, '9012345678'),
  (10, '0123456789');

-- Dummy data for the visitors_log table
INSERT INTO visitors_log (ID, Name, Cnic, "Time", Vehicle_no, flag)
VALUES
  (1, 'Visitor 1', '12345', '2022-01-01', 'ABC123', 'IN'),
  (2, 'Visitor 2', '23456', '2022-01-02', 'XYZ456', 'OUT'),
  -- Add more entries here...
  (3, 'Visitor 3', '34567', '2022-01-03', 'DEF789', 'IN'),
  (4, 'Visitor 4', '45678', '2022-01-04', 'GHI012', 'OUT'),
  (5, 'Visitor 5', '56789', '2022-01-05', 'JKL345', 'IN'),
  (6, 'Visitor 6', '67890', '2022-01-06', 'MNO678', 'OUT'),
  (7, 'Visitor 7', '78901', '2022-01-07', 'PQR901', 'IN'),
  (8, 'Visitor 8', '89012', '2022-01-08', 'STU234', 'OUT'),
  (9, 'Visitor 9', '90123', '2022-01-09', 'VWX567', 'IN'),
  (10, 'Visitor 10', '01234', '2022-01-10', 'YZA890', 'OUT');

INSERT INTO vehicles (vehicle_no, reg_no, cnic_no) VALUES
  ('ABC123', 1, '12345678901234567890'),
  ('DEF456', 2, '09876543210987654321'),
  ('GHI789', 3, '98765432109876543210'),
  ('JKL012', 4, '01234567890123456789'),
  ('MNO345', 5, '67890123456789012345');
