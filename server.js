const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");

const connection = mysql.createConnection({

  host: "localhost",
  // define port
  port: 3306,
  // username
  user: "root",
  // password
  password: "root",
  database: "employees_db"
});

connection.connect((err) => {
  if (err) throw err;

  start();
});

function start() {
    inquirer.prompt([
        {
          type: 'list',
          name: 'request',
          message: 'What would you like to do?',
          choices: ['View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add a Department',
                    'Add a Role',
                    'Add an Employee', 
                    'Update Employee Role',
                    'Update Employee Manager', // Bonus 
                    'View Employees by Manager', // Bonus
                    'View Employees by Department', // Bonus
                    'Delete Department', // Bonus   
                    'Delete Role', // Bonus  
                    'Delete Employee', // Bonus                   
                    'View Department Budget', // Bonus
                    'Exit'
                   ],
          loop: false,
        },
    ])
  
    .then(function(answer) {
      console.log(answer);
    
    if (answer.selection === "View All Departments") {
      viewAllDepartments();
    }
    else if(answer.selection === "View All Roles") {
      viewAllRoles();
    } 
    else if(answer.selection === "View All Employees") {
      viewAllEmployees();
    }
    else if(answer.selection === "Add a Department") {
      addDepartment();
    }
    else if(answer.selection === "Add a Role") {
      addRole();
    }
    else if(answer.selection === "Add an Employee") {
      addEmployee();
    }
    else if(answer.selection === "Update Employee Role") {
      updateEmployeeRole();
    }
    else if(answer.selection === "Update Employee Manager") {
      updateEmployeeManager();
    }
    else if(answer.selection === "View Employees by Manager") {
      viewEmployeesByManager();
    }
    else if(answer.selection === "View Employees by Department") {
      viewEmployeesByDepartment();
    }
    else if(answer.selection === "Delete Department") {
      deleteDepartment();
    }
    else if(answer.selection === "Delete Role") {
      deleteRole();
    }
    else if(answer.selection === "Delete Employee") {
      deleteEmployee();
    }
    else if(answer.selection === "View Department Budget") {
      viewDepartmentBudget();
    }
    else{
      connection.end();
    }
  });

}


//View All Departments Function
function viewAllDepartments() {
  connection.query(
    "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id", 
    function(err, result, fields) {
      if (err) throw err;
      console.table(result);
      // re-prompt the user for another selection
      start();
    }
  );
};

// TODO 2. Function to view all roles
function viewAllRoles() {

};

// TODO 2. Function to view all employees
function viewAllEmployees() {

};

// TODO 2. Function to add a department
function addDepartment() {

};

// TODO 2. Function to add a role
function addRole() {

};

// TODO 2. Function to add employee
function addEmployee() {

};

// TODO 2. Function to update an employee role
function updateEmployeeRole() {

};

// BONUS


// TODO 2. Function to view employee by manager
function viewEmployeesByManager() {

};

// TODO 2. Function to view employee by department
function viewEmployeesByDepartment() {

};

// TODO 2. Function to delete departments roles employees
function deleteDepartment() {

};



// TODO 2. Function to delete role department
function deleteRole() {

};

// TODO 2. Function to delete employees
function deleteEmployee() {

};

// TODO 2. Function to view total utilized budget of department
function viewDepartmentBudget() {

};
