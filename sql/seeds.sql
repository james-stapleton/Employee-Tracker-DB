
INSERT INTO department(id, name) 
VALUES (1, "Engineering"),
        (2, "Finance"),
        (3, "Legal"),
        (4, "Sales");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Lead Engineer", 150000.00, 1),
        (2, "Engineer", 100000.00, 1);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES (1, "James", "Stapleton", 1, null),
        (2, "Joe", "Smith", 2, 1),
        (3, "Jane", "Smith", 2, 1);