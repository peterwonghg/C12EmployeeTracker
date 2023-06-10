const inquirer = require("inquirer");


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
                    'Delete Departments|Roles|Employees', // Bonus                    
                    'View Department Budget', // Bonus
                    'Exit'
                   ],
          loop: false,
        },
    ])
  
    .then((data) => {
        const {request} = data;

      switch (request) {
        case 'View All Departments':
            viewDepts();
            break;
        case 'View All Roles':
            viewRoles();
            break;      
          case 'View All Employees':
            viewEmps();
            break;
          case 'Add a Department':
            newDept();
            break;
          case 'Add a Role':
            newRole();
            break;
          case 'Add an Employee':
            newEmp();
            break;
          case 'Update Employees Role':
            updateEmpRole();
            break;
          case 'Update Employees Manager':
            updateEmpManager();
            break;
          case 'View Employees by Manager':
            viewEmpByMgr();
            break;      
          case 'View Employees by Department':
            viewEmpByDept();
            break;
          case 'View Department Budget':
            viewBudgets();
            break;         
          default:
            break;            
      }
    })

}

start();



// TODO 2. Function to view all roles


// TODO 2. Function to view all employees


// TODO 2. Function to add a department


// TODO 2. Function to add a role


// TODO 2. Function to add employee


// TODO 2. ?????? Function to add and Manager


// TODO 2. Function to update an employee role


// BONUS


// TODO 2. Function to view employee by manager


// TODO 2. Function to view employee by department


// TODO 2. Function to delete departments roles employees


// TODO 2. Function to delete emplyees


// TODO 2. Function to delete role department


// TODO 2. Function to view total utilized budget of department

