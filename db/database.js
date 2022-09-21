const connection = require("./connection");

class Database {
    static db = connection;

    static viewAllEmployees() {
        return this.db.promise().query("SELECT * FROM `employee`");
    }

    static addEmployee(employee) {
        return this.db.query('INSERT INTO `employee` SET ?', employee)
    }

    static updateEmployeeRole(employee_id, role_id) {
        let queryString = `UPDATE employee SET role_id = ${role_id} WHERE id = ${employee_id}`;
        return this.db.query(queryString);
    }

    static viewAllRoles() {
        return this.db.promise().query('SELECT * FROM `role`');
    }

    static addRole(role) {
        return this.db.query('INSERT INTO `role` SET ?', role);
    }

    static viewAllDepartments() {
        return this.db.promise().query('SELECT * FROM `department`');
    }

    static addDepartment(department) {
        return this.db.query('INSERT INTO `department` SET ?', department);
    }

    static updateEmployeeManager(employee_id, manager_id) {
        let queryString = `UPDATE employee SET manager_id = ${manager_id} WHERE id = ${employee_id}`;
        return this.db.query(queryString);
    }


    static viewBudget() {
        return this.db.promise().query('SELECT department_id, name, SUM(salary) FROM role JOIN department USING(id) GROUP BY department_id');
    }
}

// Database.findAllEmployees();
// console.log(JSON.stringify(Database.findAllEmployees()));
// Database.createEmployee({first_name: "Test2", last_name: "Testerson Sr.", role_id: 2, manager_id: 1});

module.exports = Database;
