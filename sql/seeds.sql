import { v4 as uuid } from 'uuid';

INSERT INTO department() 
VALUES (uuid(), Engineering),
        (uuid(), Finance),
        (uuid(), Legal),
        (uuid(), Sales);

INSERT INTO role ()
VALUES (uuid(), "Lead Engineer", 150000.00, department_id),
        (uuid(), title, salary, department_id);

INSERT INTO employee()
VALUES (uuid(), first_name, last_name, role_id, manager_id),
        (uuid(), first_name, last_name, role_id, manager_id);