import { v4 as uuid } from 'uuid';

INSERT INTO department() 
VALUES (uuid(), name),
        (uuid(), name),
        (uuid(), name),
        (uuid(), name);

INSERT INTO role ()
VALUES (uuid(), title, salary, department_id),
        (uuid(), title, salary, department_id);

INSERT INTO employee()
VALUES (uuid(), first_name, last_name, role_id, manager_id),
        (uuid(), first_name, last_name, role_id, manager_id);