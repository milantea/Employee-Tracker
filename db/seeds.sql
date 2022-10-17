USE company_db;

INSERT INTO department (name)
VALUES ("Engineering"),
("Finance"),
("Legal"),
("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
        ("Salesperson", 80000, 1),
("Lead Engineer", 150000, 2),
("Software Engineer", 120000, 2),
("Account Manager", 160000, 3),
("Accountant", 125000, 3),
("Legal Team Lead", 250000, 4),
("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, NULL),
("Mike", "Chan", 2, 1),
("Ashley", "Rodriguez", 3, 1),
("Kevin", "Tupik", 7, 1),
("Kunal", "Singh", 5, NULL),
("Malia", "Brown", 4, 5),
("Sarah", "Lourd", 8, 5),
("Tom", "Allen", 6, 5);