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
VALUES ("Virve", "Kristiina", 1, NULL),
       ("Jimmie", "Ewart", 2, 1),
       ("Anup", "Manish", 3, 1),
       ("Nuh", "Fikri", 4, NULL),
       ("Edison", "Luciano", 5, 4),
       ("Gang", "JingYi", 6, 4),
       ("Ismail", "Nurul", 7, NULL),
       ("Nicostrato", "Liberatore", 8, 7),
       ("Phelan", "Shamus", 9, 7),
       ("Oghenero", "Adegoke", 10, NULL),
       ("Kyouko", "Harumi", 11, 10),
       ("Jorg", "Heike", 12, 10);

