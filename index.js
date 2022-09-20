const inquirer = require("inquirer");
const sql = require("mysql2");

const menu = [{
    type: "list",
    name: "menu",
    message: "What would you like to do?",
    choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department"]
}];

function init() {
    inquirer
    .prompt(menu)
    .then(( { menu }) =>
        console.log(menu));
}

init();