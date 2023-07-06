SELECT employee.id, employee.first_name, employee.last_name, role.name, department.name, role.salary, employee.manager_id
FROM department
JOIN role ON role.department_id = department.id
JOIN employee ON employee.role_id = role_id;