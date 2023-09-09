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
INSERT INTO visitors_log (Name, Cnic, Vehicle_no, flag)
VALUES
  ('Visitor 1', '12345', 'ABC123', 'IN'),
  ('Visitor 2', '23456', 'XYZ456', 'OUT'),
  -- Add more entries here...
  ('Visitor 3', '34567', 'DEF789', 'IN'),
  ('Visitor 4', '45678', 'GHI012', 'OUT'),
  ('Visitor 5', '56789', 'JKL345', 'IN'),
  ('Visitor 6', '67890', 'MNO678', 'OUT'),
  ('Visitor 7', '78901', 'PQR901', 'IN'),
  ('Visitor 8', '89012', 'STU234', 'OUT'),
  ('Visitor 9', '90123', 'VWX567', 'IN'),
  ('Visitor 10', '01234', 'YZA890', 'OUT');

INSERT INTO vehicles (vehicle_no, reg_no, cnic_no) VALUES
  ('ABC123', 1, '12345678901234567890'),
  ('DEF456', 2, '09876543210987654321'),
  ('GHI789', 3, '98765432109876543210'),
  ('JKL012', 4, '01234567890123456789'),
  ('MNO345', 5, '67890123456789012345');


-- Generate random data for the dailylog table
INSERT INTO dailylog (RegNo, "Time", Vehicle_no, flag)
SELECT
    RegNo,
    NOW() - INTERVAL '1' DAY * (random() * 365)::integer,
    case when random() < 0.5 then chr(trunc(65 + random() * 26)::integer) || chr(trunc(65 + random() * 26)::integer) || chr(trunc(65 + random() * 26)::integer) || trunc(random() * 10)::integer || trunc(random() * 10)::integer || trunc(random() * 10)::integer else '' END,
    CASE WHEN random() < 0.5 THEN 'IN' ELSE 'OUT' END
FROM info
ORDER BY random()
LIMIT 100;
