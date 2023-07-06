INSERT INTO department (name)
VALUES
    ("Clinic"),
    ("Operations"),
    ("Marketing"),
    ("Development"),
    ("Finance"),
    ("Executive");

INSERT INTO role (name, salary, department_id)
VALUES
    ("Coordinator", 40000, 1),
    ("Doctor", 100000, 1),
    ("Market Analyst", 80000, 3),
    ("Practice Manager", 90000, 2),
    ("Lease Manager", 120000, 4),
    ("Senior Accountant", 110000, 5),
    ("Chief Executive Officer", 150000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES
    ("Josh", "Guttman", 7, NULL),
    ("Taylor", "Harper", 5, 1),
    ("Lauren", "Yacopino", 4, 1),
    ("Nick", "Jeffs", 1, 3),
    ("Fotios", "Bris", 2, 3),
    ("Jenny", "Snyder", 3, 1),
    ("Joe", "Rosa", 6, 1)
    

