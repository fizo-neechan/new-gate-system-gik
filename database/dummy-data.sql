INSERT INTO dailylog (RegNo, Name, Date, "Time", Vehicle_no, flag)
VALUES
  (1, 'John Doe', '2023-05-01', '08:00:00', 'ABC123', 'Yes'),
  (2, 'Jane Smith', '2023-05-02', '09:30:00', 'XYZ987', 'No'),
  (3, 'Michael Johnson', '2023-05-03', '14:15:00', 'DEF456', 'Yes'),
  (4, 'Emily Davis', '2023-05-04', '11:45:00', 'GHI789', 'Yes'),
  (5, 'Robert Wilson', '2023-05-05', '16:20:00', 'JKL321', 'No'),
  (6, 'Olivia Brown', '2023-05-06', '10:10:00', 'MNO654', 'Yes'),
  (7, 'David Taylor', '2023-05-07', '13:30:00', 'PQR987', 'No'),
  (8, 'Sophia Clark', '2023-05-08', '15:45:00', 'STU654', 'Yes'),
  (9, 'Daniel Harris', '2023-05-09', '12:00:00', 'VWX321', 'Yes'),
  (10, 'Mia Martinez', '2023-05-10', '17:00:00', 'YZA987', 'No');

INSERT INTO info (RegNo, PictureLink, Name, FatherName, NIC, Designation, Faculty_Dept, DOB, PermanentAddress, Contact_number, EmergencyContactName, EmergencyContactNumber, IdentificationMark, BloodGroup, Vehicle_no)
VALUES
  (1, 'https://example.com/pic1.jpg', 'John Doe', 'Robert Doe', '12345678901234567', 'Manager', 'Administration', '1990-01-01', '123 Main Street, City', '1234567890', 'Jane Doe', '0987654321', 'Mole on left cheek', 'A+', 'ABC123'),
  (2, 'https://example.com/pic2.jpg', 'Jane Smith', 'Michael Smith', '23456789012345678', 'Engineer', 'Engineering', '1992-03-15', '456 Elm Street, City', '9876543210', 'John Smith', '0123456789', 'Scars on right hand', 'B-', 'XYZ987'),
  (3, 'https://example.com/pic3.jpg', 'Michael Johnson', 'David Johnson', '34567890123456789', 'Supervisor', 'Operations', '1985-07-20', '789 Oak Street, City', '4567890123', 'Sarah Johnson', '9876543210', 'Tattoo on neck', 'O+', 'DEF456'),
  (4, 'https://example.com/pic4.jpg', 'Emily Davis', 'William Davis', '45678901234567890', 'Analyst', 'Finance', '1988-12-10', '321 Pine Street, City', '7890123456', 'Jessica Davis', '0123456789', 'None', 'AB-', 'GHI789'),
  (5, 'https://example.com/pic5.jpg', 'Robert Wilson', 'Christopher Wilson', '56789012345678901', 'Developer', 'IT', '1993-05-25', '654 Cedar Street, City', '5678901234', 'Emily Wilson', '9876543210', 'Birthmark on forehead', 'A-', 'JKL321'),
  (6, 'https://example.com/pic6.jpg', 'Olivia Brown', 'Daniel Brown', '67890123456789012', 'Coordinator', 'HR', '1991-09-05', '987 Maple Street, City', '4567890123', 'Sophia Brown', '0123456789', 'None', 'B+', 'MNO654'),
  (7, 'https://example.com/pic7.jpg', 'David Taylor', 'James Taylor', '78901234567890123', 'Technician', 'Maintenance', '1987-04-18', '147 Walnut Street, City', '7890123456', 'Isabella Taylor', '9876543210', 'Mole on right arm', 'AB+', 'PQR987'),
  (8, 'https://example.com/pic8.jpg', 'Sophia Clark', 'Matthew Clark', '89012345678901234', 'Researcher', 'Research', '1989-11-30', '369 Oak Street, City', '5678901234', 'Oliver Clark', '0123456789', 'Scars on left leg', 'O-', 'STU654'),
  (9, 'https://example.com/pic9.jpg', 'Daniel Harris', 'William Harris', '90123456789012345', 'Assistant', 'Administration', '1994-08-12', '741 Elm Street, City', '4567890123', 'Charlotte Harris', '9876543210', 'Tattoo on left arm', 'A+', 'VWX321'),
  (10, 'https://example.com/pic10.jpg', 'Mia Martinez', 'Joseph Martinez', '01234567890123456', 'Coordinator', 'Events', '1996-02-28', '963 Pine Street, City', '7890123456', 'Emily Martinez', '0123456789', 'Birthmark on neck', 'B-', 'YZA987');

INSERT INTO regnobarcode (RegNo, BarCode)
VALUES
  (1, 'ABC123456'),
  (2, 'DEF234567'),
  (3, 'GHI345678'),
  (4, 'JKL456789'),
  (5, 'MNO567890'),
  (6, 'PQR678901'),
  (7, 'STU789012'),
  (8, 'VWX890123'),
  (9, 'YZA901234'),
  (10, 'BCD012345');

-- Enable the pgcrypto extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Insert the records into the login table with bcrypt-hashed passwords
INSERT INTO login (username, password)
VALUES
  ('user1', crypt('password1', gen_salt('bf'))),
  ('user2', crypt('password2', gen_salt('bf'))),
  ('user3', crypt('password3', gen_salt('bf'))),
  ('user4', crypt('password4', gen_salt('bf'))),
  ('user5', crypt('password5', gen_salt('bf'))),
  ('user6', crypt('password6', gen_salt('bf'))),
  ('user7', crypt('password7', gen_salt('bf'))),
  ('user8', crypt('password8', gen_salt('bf'))),
  ('user9', crypt('password9', gen_salt('bf'))),
  ('user10', crypt('password10', gen_salt('bf')));

-- ta into the visitors_log table
INSERT INTO visitors_log (ID, Name, Cnic, Date, "Time", Vehicle_no, flag)
VALUES
  (1, 'Visitor 1', '12345678901234567', '2023-05-01', '10:00:00', 'ABC123', 'Yes'),
  (2, 'Visitor 2', '23456789012345678', '2023-05-02', '11:30:00', 'XYZ987', 'No'),
  (3, 'Visitor 3', '34567890123456789', '2023-05-03', '14:45:00', 'DEF456', 'Yes'),
  (4, 'Visitor 4', '45678901234567890', '2023-05-04', '12:15:00', 'GHI789', 'Yes'),
  (5, 'Visitor 5', '56789012345678901', '2023-05-05', '16:30:00', 'JKL321', 'No'),
  (6, 'Visitor 6', '67890123456789012', '2023-05-06', '13:20:00', 'MNO654', 'Yes'),
  (7, 'Visitor 7', '78901234567890123', '2023-05-07', '15:45:00', 'PQR987', 'No'),
  (8, 'Visitor 8', '89012345678901234', '2023-05-08', '17:00:00', 'STU654', 'Yes'),
  (9, 'Visitor 9', '90123456789012345', '2023-05-09', '11:30:00', 'VWX321', 'Yes'),
  (10, 'Visitor 10', '01234567890123456', '2023-05-10', '14:00:00', 'YZA987', 'No');

-- Insert dummy data into the car_log table
INSERT INTO car_log (Vehicle_no, driver_reg, driver_cnic, flag, vehicle_under)
VALUES
  ('Vehicle1', 1, 1234567890123456, 'Yes', 'Vehicle1'),
  ('Vehicle2', 2, 2345678901234567, 'No', 'Vehicle2'),
  ('Vehicle3', 3, 3456789012345678, 'Yes', 'Vehicle3'),
  ('Vehicle4', 4, 4567890123456789, 'Yes', 'Vehicle4'),
  ('Vehicle5', 5, 5678901234567890, 'No', 'Vehicle5'),
  ('Vehicle6', 6, 6789012345678901, 'Yes', 'Vehicle6'),
  ('Vehicle7', 7, 7890123456789012, 'No', 'Vehicle7'),
  ('Vehicle8', 8, 8901234567890123, 'Yes', 'Vehicle8'),
  ('Vehicle9', 9, 9012345678901234, 'Yes', 'Vehicle9'),
  ('Vehicle10', 10, 1234567890123456, 'No', 'Vehicle10');
