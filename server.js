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

connection.connect(function(err) {
  if (err) throw err;
  toDo();
});

//call the function that uses inquierer
//function choices: 
function toDo() {
    inquirer.prompt(
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["View All Employees", "View All Roles", "View All Departments", "Add Employee", "Add Role", "Add Department", "Update Employee"]
        }
    ).then(function(answers) {
        switch(answers.action) {
        case "View All Employees":
            viewEmployees();
        case "View All Roles":
            viewRoles();
        case "View All Departments":
            viewDepartments();
    }
 // so the answers are going to to the object?? of answers, now with that, if it equals a view all employees, show the select view from. 
    })
}

function viewEmployees() {
    //call the functions?
    //it queryes the employee's table...
    //it then delivers output
    
    var query = connection.query("SELECT * FROM employees", function(err, res) {
        if (err) throw err;
        console.log(res);
    });
    
            
}
function viewRoles() {
    var query = connection.query("SELECT * FROM roles", function(err, res) {
        if (err) throw err;
        console.log(res);
    });
}
function viewDepartments() {
    var query = connection.query("SELECT * FROM departments", function(err, res) {
        if (err) throw err;
        console.log(res);
    });
}
//.then use each answer to edit the database using switch and case which will call the different functins that does the operatins of adding departments, adding roles, adding employees, viewing departments, roles and employess, updating employee roles. 


