const connection = require("./connection");

class Database {
    static db = connection;

    static findAllEmployees() {
        return this.db.promise().query("SELECT * FROM employee");
    }

    static createEmployee(employee) {
        return this.db.promise().query("INSERT INTO employee SET ?", employee)
    }
}

console.log(Database.createEmployee({id: 1, first_name: "James", last_name: "Stapleton", role_id: 4, manager_id: 1}));