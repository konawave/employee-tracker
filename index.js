const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "rootpassword",
      database: "employees_db",
    },
    console.log(`Connected to the employees_db database.`)
  );

  // Menu bar of options that appear when index.js is run
  const navigation = [
    {
    type: "list",
    name: "navigation",
    message: "Select an option",
    choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Update an employee role",
        "Quit"
    ]
  }
];

// TODO Function to view departments

function viewDepartments() {
  db.query(`SELECT * FROM departments`)
}

inquirer
  .prompt(navigation)
  .then((answer) => {
    switch (answer.navigation) {
      case "View all departments":
        // TODO Function to view departments here
        break;
      case "View all roles":
        // TODO Function to view all roles here
        break;
      case "View all employees":
        //TODO Function to join all tables and show them here
        break;
      case "Add a department":
        //TODO Function to make changes to add a new department to the department table here
        break;
      case "Update an employee role":
        //TODO Function to change a chosen employee's role to a pre-existing role
        break;
      case "Quit":
        console.log('Thank you for using this application!')
        break;
    }
  })

console.log(navigation[0].choices)
