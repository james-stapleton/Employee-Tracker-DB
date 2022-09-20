const inquirer = require("inquirer");
const sql = require("mysql2");
const Database = require("./db/database");
// const Database = require("./db/database");
// const connection = require("./db/connection");

const menu = [{
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"]
}];

const employeeMenu = [
    {
        type: "input",
        name: "firstName",
        message: "First name?"
    },
    {
        type: "input",
        name: "lastName",
        message: "Last Name?"
    },
    {
        type: "input",
        name: "roleID",
        message: "Role id?"
    },
    {
        type: "input",
        name: "managerID",
        message: "Manager id?"
    }
];

const roleMenu = [{
    
}]

function init() {
    inquirer
    .prompt(menu)
    .then(( { menu }) => {
        switch (menu) {
            case "View All Employees":
                Database.viewAllEmployees();
                console.log(Database.viewAllEmployees());
                console.log("employees should be found");
                break;
            case "Add Employee":
                inquirer
                    .prompt(employeeMenu)
                    .then(( data ) => {
                        const employee = {
                            first_name: data.firstName,
                            last_name: data.lastName,
                            role_id: data.roleID,
                            manager_id: data.managerID
                        }
                    Database.addEmployee(employee);      
                    })
                break; 
            case "Update Employee Role":
                Database.updateEmployeeRole(role_id); 
                inquirer
                .prompt( roleMenu)
                .then(( data ) => {

                })
                break;
            case "View All Roles":
                Database.viewAllRoles();
                break;
            case "Add Role": 
                Database.addRole(role);
                break;
            case "View All Departments":
                Database.viewAllDepartments();
                break;
            case "Add Department":
                Database.addDepartment(department);
                break;
            default:
                console.log(menu);
                break;
        }
    }
    )
}

init();