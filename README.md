# C12EmployeeTracker

Github Link: https://github.com/peterwonghg/C12EmployeeTracker.git

Video Link: https://drive.google.com/file/d/19n_vjGbj-S9zpRXhHDo74eLQgfcFcoGO/view


![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Table of Contents:
### - [Description](#description)
### - [Development](#development)
### - [Demo](#demo)
### - [License](#license)
### - [Contributing](#contributing)
### - [Questions](#questions)
### - [References](#references)
<br>

## Description

C12EmployeeTracker is a command line application that tracks employees records.  Employees record can be viewed based on different criteria, add new data and update capability.

### User Story

```
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```


### Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Development
1. Create a folder for C12EmployeeTracker
2. Clone the repository from GitHub: https://github.com/peterwonghg/C12EmployeeTracker.git
3. Open the terminal and navigate to the C12EmployeeTracker folder
4. Install Inquierer 8.2.4
5. Install mysql2
6. Install console.table


## Demo

### Demo Video
[![Demo Video](./assets/play.png)](https://drive.google.com/file/d/19n_vjGbj-S9zpRXhHDo74eLQgfcFcoGO/view)

### Inquierer
![Inquierer](./assets/01-Intro.png)

### View All Departments
![View All Departments](./assets/02-View-All-Departments.png)

### View All Roles
![Inquierer](./assets/03-View-All-Roles.png)

### View All Employees
![Inquierer](./assets/04-View-All-Employees.png)

### Add New Role
![Inquierer](./assets/05-Add-New-Role.png)

### Add New Employee
![Inquierer](./assets/06-Add-New-Employee.png)

### Update Employee Role
![Inquierer](./assets/07-Update-Employee-Role.png)


## License
- MIT
<br><br>

## Contribution
Get in touch with me to make contributions to the project.
<br><br>

## Questions
If you have any questions, please contact me:
- GitHub: [peterwonghg](https://github.com/peterwonghg)
- Email: peterwonghg@gmail.com
<br><br>

## References
Thomas and Friends SQL Employee Tracker | UpfT Coding Bootcamp: Module 12
https://www.youtube.com/watch?v=m9CQxR0AfiQ

SQL – Employee Tracker – Node.JS – Nathaniel Ehrlich
https://www.youtube.com/watch?v=8wSVL_SqPP4


Node.js MySQL Tutorial | How To Connect Node.js With SQL Server | NodeJS Tutorial | Simplilearn
https://www.youtube.com/watch?v=YYEC7ydDj4k&t=1375s

MySQL Tutorial for Beginners (Full Course)
https://www.youtube.com/watch?v=7S_tz1z_5bA
