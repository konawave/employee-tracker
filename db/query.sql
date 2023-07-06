SELECT
    role.salary AS shmoney, employee.first_name AS name
FROM
    role
JOIN role.salary ON employee.first_name = value.id