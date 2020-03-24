//require sql
//require inquierer
//connect mysql database with port, user, host, password, etc
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "ZooLoo149er%",
    database: "employee_manager_db"
});

connection.connect(function (err) {
    if (err) throw err;
    toDo();
});

//call the function that uses inquierer
//function choices: 
function toDo() {
    inquirer.prompt({
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: ["View All Employees", "View All Roles", "View All Departments", "Add Employee", "Add Role", "Add Department", "Update Employee"]
    }).then(function (answers) {
        switch (answers.action) {
            case "View All Employees":
                viewEmployees();
            case "View All Roles":
                viewRoles();
            case "View All Departments":
                viewDepartments();
            case "Add Employee":
                addEmployee();
            case "Add Role":
                addRole();
            case "Add Department":
                addDepartment();
        };
        // so the answers are going to to the object?? of answers, now with that, if it equals a view all employees, show the select view from. 
    });
};
// simple functions for viewing current all
function viewEmployees() {
    connection.query("SELECT * FROM employees", function (err, res) {
        if (err) throw err;
        console.log(res);
    });
}

function viewRoles() {
    connection.query("SELECT * FROM roles", function (err, res) {
        if (err) throw err;
        console.log(res);
    });
}

function viewDepartments() {
    connection.query("SELECT * FROM departments", function (err, res) {
        if (err) throw err;
        console.log(res);
    });
}

//functions for adding roles employees or departments
function addEmployee() {
    inquirer.prompt([{
            name: "first_name",
            type: "input",
            message: "What is the first name of the employee?"
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the last name of the employee?"
        }
    ]).then(function (answer) {
        connection.query("INSERT INTO employees SET ?", {
                first_name: answer.first_name,
                last_name: answer.last_name
            },
            function (err) {
                if (err) throw err;
                console.log("Your employee was created succesfully.");
                toDo();
            });
    });
}

function addRole() {
    inquirer.prompt([{
            name: "title",
            type: "input",
            message: "What is the title of the new role?"
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary of the new role?"
        }
    ]).then(function (answer) {
        connection.query("INSERT INTO roles SET ?", {
                title: answer.title,
                salary: answer.salary
            },
            function (err) {
                if (err) throw err;
                console.log("Your new role was created succesfully.");
                toDo();
            });
    });
}

function addDepartment() {
    inquirer.prompt([{
        name: "department",
        type: "input",
        message: "What is the name of the new department?"
    }]).then(function (answer) {
        connection.query("INSERT INTO departments SET ?", {
                name: answer.department
            },
            function (err) {
                if (err) throw err;
                console.log("Your new department was created succesfully.");
                toDo();
            });
    });
}
//.then use each answer to edit the database using switch and case which will call the different functins that does the operatins of adding departments, adding roles, adding employees, viewing departments, roles and employess, updating employee roles. 