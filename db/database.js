const connection = require("./connection");

class Database {
    static db = connection;

    static viewAllEmployees() {
        return this.db.query('SELECT * FROM `department`');
    }

    static addEmployee(employee) {
        return this.db.query('INSERT INTO `employee` SET ?', employee)
    }

    static updateEmployeeRole(employee_id, role_id) {
        let queryString = `UPDATE employee SET role_id = ${role_id} WHERE id = ${employee_id}`;
        return this.db.query(queryString);
    }

    static viewAllRoles() {
        
        return this.db.query('SELECT * FROM `role`',
        function(err, results, fields) {
        //   console.log(results); results contains rows returned by server
        //   console.log(fields);  fields contains extra meta data about results, if available
        }
      );
    }

    static addRole(role) {
        return this.db.query('INSERT INTO `role` SET ?', role);
    }

    static viewAllDepartments() {
        return this.db.query('SELECT * FROM `department`');
    }

    static addDepartment(department) {
        return this.db.query('INSERT INTO `department` SET ?', department);
    }
}

// Database.findAllEmployees();
// console.log(JSON.stringify(Database.findAllEmployees()));
// Database.createEmployee({first_name: "Test2", last_name: "Testerson Sr.", role_id: 2, manager_id: 1});

module.exports = Database;
