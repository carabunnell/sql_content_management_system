DROP DATABASE IF EXISTS employee_manager_db;
CREATE DATABASE employee_manager_db;
USE employee_manager_db;

CREATE TABLE departments (
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE roles (
    id int NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary VARCHAR(50) NOT NULL,
    --salary decimal to hold salary
    -- departmentid INT(),
    PRIMARY KEY(id)
);
CREATE TABLE employees (
    id int NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
   --roleId INT references role of employee
    -- managerId INT can be null
    PRIMARY KEY(id)
);