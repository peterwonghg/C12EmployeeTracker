DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

-- Department Name
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30) NOT NULL,

  PRIMARY KEY (id),
  UNIQUE KEY (department_name)
);

-- name, salary, and department
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) 
    REFERENCES department(id)
);


-- first name, last name, role, and manager
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT REFERENCES employee(id),

  PRIMARY KEY (id),
  FOREIGN KEY (role_id) 
    REFERENCES role(id)
);

INSERT INTO department (department_name)
VALUES ("Production"),
       ("Plant Maintenance"),
       ("Fleet Maintenance"),
       ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Plant Manager", 190000.00, 1),
       ("Superintendant", 130000.00, 1),
       ("Supervisor", 90000.00, 1),
       ("Quality Assurance Manager", 115000.00, 1),
       ("Maintenance Manager", 125000.00, 2),
       ("Fitter", 80000.00, 2),
       ("Electrician", 90000.00, 2),
       ("Transport Manager", 125000.00, 3),
       ("Mechanic", 80000.00, 3),
       ("Mobile Mechanic", 85000.00, 3),
       ("Engineering Manager", 175000.00, 4),
       ("Project Engineer", 135000.00, 4),
       ("Design Engineer", 125000.00, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kristina", "Virve", 1, NULL),
       ("Jimmie", "Ewart", 2, 1),
       ("Anup", "Manish", 3, 1),
       ("Percy", "Bandjin", 4, 1),       
       ("Nuh", "Fikri", 5, NULL),
       ("Edison", "Luciano", 6, 5),
       ("JingYi", "Gang", 7, 5),
       ("Nurul", "Ismail", 8, NULL),
       ("Nicostrato", "Liberatore", 9, 8),
       ("Phelan", "Shamus", 10, 8),
       ("Oghenero", "Adegoke", 11, NULL),
       ("Kyouko", "Harumi", 12, 11),
       ("Jorg", "Heike", 13, 11);

