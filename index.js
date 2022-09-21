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

const updateRoleMenu = [
    {
        type: "input",
        name: "oldRole",
        message: "Employee id?"
    },
    {
        type: "input",
        name: "newRole",
        message: "New role id?"
    }
]

const addRoleMenu = [
    {
        type: "input",
        name: 'title',
        message: "New role title?"
    },
    {
        type: "input",
        name: "salary",
        message: "New role salary?"
    },
    {
        type: "input",
        name: "department",
        message: "New role department?" 
    }
];

const newDepartmentMenu = [
    {
        type: "input",
        name: "name",
        message: "New department name?"
    }
];

function init() {
    inquirer
    .prompt(menu)
    .then(( { menu }) => {
        switch (menu) {
            case "View All Employees":
                viewEmployees();
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
                inquirer
                .prompt( updateRoleMenu)
                .then(( data ) => {
                Database.updateEmployeeRole(data.oldRole, data.newRole); 
                })
                break;
            case "View All Roles":
                viewRoles();
                break;
            case "Add Role": 
                inquirer
                .prompt( addRoleMenu )
                .then (( data ) => {
                    const role = {
                        title: data.title,
                        salary: data.salary,
                        department_id: data.department
                    }
                Database.addRole(role);
                })
                break;
            case "View All Departments":
                viewDepartments();
                break;
            case "Add Department":
                inquirer
                .prompt (newDepartmentMenu)
                .then((data) => {
                    const department = {
                        name: data.name
                    }
                Database.addDepartment(department);
                })
                break;
            default:
                console.log(menu);
                break;
        }
    }
    )
}

function viewEmployees() {
    Database.viewAllEmployees()
      .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees);
      })
  }

  function viewRoles() {
    Database.viewAllRoles()
      .then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
      })
  }

  function viewDepartments() {
    Database.viewAllDepartments()
      .then(([rows]) => {
        let departments = rows;
        console.log("\n");
        console.table(departments);
      })
  }

init();