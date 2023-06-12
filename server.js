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
          name: 'selection',
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
    else if(answer.selection === "Exit") {
      connection.end();
    }    
    else{
      start()
    }
  });

}


//View All Departments Function
function viewAllDepartments() {
connection.query(
  "SELECT * FROM department", function(err, result, fields) {
    if (err) throw err;
    console.table(result);
    // prompt the user for another selection
    start();
  }
);
};

// View all roles Funstion
function viewAllRoles() {
  connection.query(  
    "SELECT role.id, role.title, role.salary, department.department_name FROM role LEFT JOIN department on role.department_id = department.id",
    function(err, result, fields) {
      if (err) throw err;
       console.table(result);
       // prompt the user for another selection
       start();
     }
  ); 
};

// View All Employees Function
function viewAllEmployees() {
  connection.query(
    "SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.id, department.id FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id", 
    function(err, result, fields) {
      if (err) throw err;
      console.table(result);
      // prompt the user for another selection
      start();
    }
  );
};

// Add All Helpers

const roleChoices = [];
const employeeChoices = [];
const departmentChoices = [];
const managerChoices = [];

function searchRole(){  
  
  connection.query("SELECT * FROM role", function (err, data) {
      if (err) throw err;
      for (i = 0; i < data.length; i++) {
          roleChoices.push(data[i].id + "-" + data[i].title)
      }
   })
  }

function searchEmployee(){  
   connection.query("SELECT * FROM employee", function (err, data) {
       if (err) throw err;
       for (i = 0; i < data.length; i++) {
           employeeChoices.push(data[i].id + "-" + data[i].first_name+" "+ data[i].last_name)
       }
   }) 
  }

function searchDepartment(){
connection.query("SELECT * FROM department", function (err, data) {
  if (err) throw err;
  for (i = 0; i < data.length; i++) {
      departmentChoices.push(data[i].id + "-" + data[i].department_name)
  }
})
}

function searchManager(){
  connection.query("SELECT * FROM role", function (err, data) {
    if (err) throw err;
    for (i = 0; i < data.length; i++) {
        managerChoices.push(data[i].id + "-" + data[i].title)
    }
 })
}

// Add Department Function
function addDepartment() {

  searchRole()
  searchEmployee()
  searchDepartment()

  inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: "Enter the name of the department to be added:"
  }
  ]).then(function(answer) {
    const query = 
    `INSERT INTO department (department_name) VALUES ('${answer.name}')`;
    connection.query(query, function(err, res) {
      console.log(`Added ${answer.name} Department`)
    });
    start();
  });
};

// Add Role function
function addRole() {

  searchRole()
  searchEmployee()
  searchDepartment()
  
  inquirer.prompt([
  {
    name: "role",
    type: "input",
    message: "Enter the role to be added:"
  },
  
  {
      name: "department",
      type: "list",
      message: "Select the department for the new role:",
      choices: departmentChoices
  },
  
  {
    name: "salary",
    type: "number",
    message: "Enter the salary of the new role:"
  },
  
   ]).then(function(answer) {
     console.log(`${answer.role}`)
    const getDepartmentId =answer.department.split("-")
    const query = 
    `INSERT INTO role (title, salary, department_id)
     VALUES ('${answer.role}','${answer.salary}','${getDepartmentId[0]}')`;
    connection.query(query, function(err, res) {
      console.log(`The new role ${answer.role} has been added!`)
    });
    start();
  });
};

// Add Employee Function
function addEmployee() {

  searchRole()
  searchEmployee()
  searchManager()

  inquirer.prompt([
  {
    name: "firstname",
    type: "input",
    message: "Enter the employee's first name?"
  },

  {
      name: "lastname",
      type: "input",
      message: "Enter the employee's last name?"
  },

  {
      name: "role",
      type: "list",
      message: "Select the employee's role?",
      choices: roleChoices 
    },

    {
      name: "manager",
      type: "list",
      message: "Who is the employee's manager?",
      choices: managerChoices
    }
  
   ]).then(function(answer) {
    const getRoleId =answer.role.split("-")
    const getManagerId=answer.manager.split("-")
    const query = 
    `INSERT INTO employee (first_name, last_name, role_id, manager_id)
     VALUES ('${answer.firstname}','${answer.lastname}','${getRoleId[0]}','${getManagerId[0]}')`;
    connection.query(query, function(err, res) {
      console.log(`new employee ${answer.firstname} ${answer.lastname} added!`)
    });
    start();
  });
};

// TODO 2. Function to update an employee role
function updateEmployeeRole() {

  connection.query('SELECT * FROM employee', function (err, result) {
    if (err) throw (err);
    inquirer
      .prompt([
        {
          name: "employeeName",
          type: "list",
  
          message: "Select the employee to update:",
          choices: function () {
            const employeeArray = [];
            result.forEach(result => {
              employeeArray.push(
                result.last_name
              );
            })
            return employeeArray;
          }

        }
      ])
   
      .then(function (answer) {
        console.log(answer);
        const name = answer.employeeName;
      
        connection.query("SELECT * FROM role", function (err, res) {
          inquirer
            .prompt([
              {
                name: "role",
                type: "list",
                message: "Enter new role?",
                choices: function () {
                  const roleArray = [];
                  res.forEach(res => {
                    roleArray.push(
                      res.title)
                  })
                  return roleArray;
                }
              }
            ]).then(function (roleAnswer) {
              const role = roleAnswer.role;
              console.log(role);
              connection.query('SELECT * FROM role WHERE title = ?', [role], function (err, res) {
                if (err) throw (err);
                let roleId = res[0].id;
   
                let query = "UPDATE employee SET role_id = ? WHERE last_name =  ?";
                let values = [parseInt(roleId), name]
        
                connection.query(query, values,
                  function (err, res, fields) {
                    console.log(`${name}'s role has been updated as ${role}.`)
                    start();
                  })
                // viewAll();
              })
            })
        })

      })

  })

};

// BONUS


// TODO 2. Function to view employee by manager
function viewEmployeesByManager() {

};

// TODO 2. Function to view employee by department
function viewEmployeesByDepartment() {

};

// TODO 2. Function to delete department
function deleteDepartment() {

};



// TODO 2. Function to delete role
function deleteRole() {

};

// TODO 2. Function to delete employees
function deleteEmployee() {

};

// TODO 2. Function to view total utilized budget of department
function viewDepartmentBudget() {

};

