const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "7674",
      database: "tracker_db",
    },
    console.log(`Connected to the employees_db database.`)
  );

  const addDepartment = [
    {
    type: "input",
    name: "addDep",
    message: "Enter the name of the new department",
  }
  ];
  
  inquirer
    .prompt(addDepartment)
    .then((answer) => {
        const departmentName = answer.addDep
        db.query(`INSERT INTO department (name) VALUES ("${departmentName}")`, (error) => {
        if (error) {
          console.error(error);
          return;
        } else if (answer == null) {
            console.log("Please enter a department name");
            return;
        }
        else {console.log("Department added successfully")};
      })
    })