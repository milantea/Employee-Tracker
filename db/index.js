const { createPromptModule } = require("inquirer");
const connection = require("./connection");

class Connection {
  constructor(connection) {
    this.connection = connection;
  }

  findAllDepartments() {
    return this.connection.promise().query("SELECT * FROM department");
  }

  findAllRoles() {
    // columns needed to return role title, role id, department name, role salary
    return this.connection
      .promise()
      .query(
        "SELECT role.title, role.id, department.name, role.salary FROM role LEFT JOIN department ON role.department_id = department.id"
      );
  }

  findAllEmployees() {
    //including employee ids, first names, last names, role titles, departments, salaries, and managers that the employees report to
    return this.connection
      .promise()
      .query(
        "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
      );
  }

  createDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  createRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }

  createEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }

  updateEmployee(employee) {
    return this.connection
      .promise()
      .query(
        "SELECT first_name, last_name, role_id AS role, manager_id FROM employee UPDATE employee SET ?",
        employee
      );
  }
}

module.exports = new Connection(connection);
