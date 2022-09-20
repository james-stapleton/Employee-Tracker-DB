import { v4 as uuid } from 'uuid';

INSERT INTO department() 
VALUES (uuid(), Engineering),
        (uuid(), Finance),
        (uuid(), Legal),
        (uuid(), Sales);

INSERT INTO role ()
VALUES (uuid(), "Lead Engineer", 150000.00, department_id),
        (uuid(), "Engineer", 100000.00, department_id);

INSERT INTO employee()
VALUES (uuid(), "James", "Stapleton", role_id, manager_id),
        (uuid(), "Joe", "Smith", role_id, manager_id),
        (uuid(), "Jane", "Smith", role_id, manager_id);