INSERT INTO department(name) 
VALUES ("Engineering"),
        ("Finance"),
        ("Legal"),
        ("Sales"),
        ("Marketing"),
        ("Accounting");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000.00, 1),
        ("Engineer", 100000.00, 1),
        ("Junior Engineer", 80000.00, 1),
        ("Lead Analyst", 120000.00, 2),
        ("Financial Analyst", 90000.00, 2),
        ("Lead Legal Counsel", 200000.00, 3),
        ("Lawyer", 100000.00, 3),
        ("Paralegal", 65000.00, 3),
        ("Sales Manager", 180000.00, 4),
        ("Sales Rep", 100000.00, 4),
        ("Marketing Manager", 150000.00, 5),
        ("Marketing Consultant", 110000.00, 5),
        ("Accounting Manager", 120000.00, 6),
        ("Accountant", 100000.00, 6)
        ;

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("James", "Stapleton", 1, null),
        ("Joe", "Smith", 4, null),
        ("Joe", "Doe", 6, null),
        ("Jane", "Smith", 9, null),
        ("Bob", "Smith", 11, null),
        ("Joe", "Smith", 13, null);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 2, 1),
        ("Jack", "Smith", 3, 1),
        ("Rob", "Doe", 5, 4),
        ("Sally", "Smith", 7, 6),
        ("Amber", "Smith", 8, 6),
        ("Sam", "Smith", 10, 9),
        ("Bryan", "Smith", 12, 11)
        ;