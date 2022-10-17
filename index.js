const { prompt } = require("inquirer");
const db = require("./db");
require("console.table");
// await function to run once variable is input with dynamic values
questions();
function questions() {
  prompt([
    {
      type: "list",
      name: "nextChoice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Roles",
          value: "VIEW_ROLES",
        },
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "Add a Department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Add a Role",
          value: "ADD_ROLE",
        },
        {
          name: "Add an Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Update an Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "Exit",
          value: "EXIT",
        },
      ],
    },
  ]).then((res) => {
    let choice = res.choice;
    switch (choice) {
      case "VIEW_ROLES":
        viewRoles();
        break;
      case "VIEW_DEPARTMENTS":
        viewDepartments();
        break;
      case "VIEW_EMPLOYEES":
        viewEmployees();
        break;
      case "ADD_DEPARTMENT":
        addDepartment();
        break;
      case "ADD_ROLE":
        addRole();
        break;
      case "ADD_EMPLOYEE":
        addEmployee();
        break;
      case "UPDATE_EMPLOYEE_ROLE":
        updateEmployeeRole();
        break;
      // default:
      //   exit();
    }
  });
}

function viewRoles() {
  db.findAllRoles()
    .then(([data]) => console.table(data))
    .then(() => init());
}

function viewDepartments() {
  db.findAllDepartments()
    .then(([data]) => console.table(data))
    .then(() => init());
}

function viewEmployees() {
  db.findAllEmployees()
    .then(([data]) => console.table(data))
    .then(() => init());
}

function addDepartment() {
  // prompt({
  //   type: "input",
  //   name: "departmentName",
  //   message: "What is the name of the new department?",
  // }).then((answers) => {
  //   console.log(answers);
  // });
  db.createDepartment()
    .then(([data]) => console.table(data))
    .then(() => init());
}

function addRole() {
  db.createRole()
    .then(([data]) => console.table(data))
    .then(() => init());
}

function addEmployee() {
  db.createEmployee()
    .then(([data]) => console.table(data))
    .then(() => init());
}

function updateEmployeeRole() {
  db.updateEmployee()
    .then(([data]) => console.table(data))
    .then(() => init());
}

// function exit() {
//   console.log("Done.");
//   process.exit();
// }
// const query = `INSERT INTO departments(departmentName) VALUES ($1) RETURNING *`;

// connection.query;
// module.exports = addDepartment;

// db query insert into to add departments
