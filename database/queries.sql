select
    cast(regno as varchar) as id,
    name,
    Designation
from info 
where lower(name) like '%v%' or cast(regno as varchar)='v%'
union 
select
    cnic as id,
    name,
    'Visitor' as Designation
from visitors_log
where lower(name) like '%v%' or cnic='v%'
union
select
    vehicle_no as id,
    'None' as name,
    'Vehicle' as Designation
from vehicles
where lower(vehicle_no)='v%';
