const connection = require("./connection");

class Database {
    static db = connection;

    static findAllEmployees() {
        return this.db.query('SELECT * FROM `department`'
          );
    }

    static createEmployee(employee) {
        return this.db.query('INSERT INTO `employee` SET ?', employee)
    }
}

// Database.findAllEmployees();
Database.createEmployee({id: 5, first_name: "Test", last_name: "Testerson", role_id: 2, manager_id: 1});