DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;

use employee_tracker;

CREATE TABLE department (
    id int AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
        REFERENCES department(id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id) 
		REFERENCES employee(id),
    FOREIGN KEY (role_id)
        REFERENCES role(id)
);

SELECT first_name, last_name, title
FROM employee JOIN role ON role.id = employee.role_id
WHERE employee.role_id = 2;

SELECT department_id, name, SUM(salary)
FROM role join department USING(id)
GROUP BY department_id;

SELECT first_name, last_name, manager_id
FROM employee
ORDER BY manager_id;