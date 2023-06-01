import random

# Function to generate a random RegNo
def generate_regno():
    year = random.choice([2019, 2020, 2021, 2022])
    digits = random.randint(100, 999)
    return year * 1000 + digits

# Function to generate a random NIC
def generate_nic():
    nic = ''.join(random.choices('0123456789', k=13))
    return '00000-' + nic

# Function to generate random data for the schema
def generate_random_data():
    with open('./names.txt', 'r') as f:
        names = f.read().splitlines()

    data = []
    for i in range(100):
        regno = generate_regno()
        name = random.choice(names)
        father_name = random.choice(names)
        nic = generate_nic()
        designation = random.choice(['Manager', 'Engineer', 'Teacher', 'Doctor'])
        faculty_dept = random.choice(['Computer Science', 'Electrical Engineering', 'Mechanical Engineering'])
        dob = random.randint(1960, 2000)
        address = 'Address ' + str(i)
        contact_number = '1234567890'
        emergency_contact_name = random.choice(names)
        emergency_contact_number = '9876543210'
        identification_mark = 'Mark ' + str(i)
        blood_group = random.choice(['A+', 'B+', 'O+', 'AB+'])

        vehicle_no = ''
        if(random.randint(0, 100) % 2 == 0):
            vehicle_no += random.choice(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"])
            vehicle_no += random.choice(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"])
            vehicle_no += random.choice(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"])
            vehicle_no += random.choice(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
            vehicle_no += random.choice(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
            vehicle_no += random.choice(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])

        data.append((regno, '', name, father_name, nic, designation, faculty_dept, dob, address, contact_number,
                     emergency_contact_name, emergency_contact_number, identification_mark, blood_group, vehicle_no))

    return data

# Generate random data
random_data = generate_random_data()

# SQL insert statement
insert_sql = "INSERT INTO info (RegNo, PictureLink, Name, FatherName, NIC, Designation, Faculty_Dept, DOB, " \
             "PermanentAddress, Contact_number, EmergencyContactName, EmergencyContactNumber, IdentificationMark, " \
             "BloodGroup, Vehicle_no) VALUES"
print(insert_sql)
for i in random_data:
    print(i)