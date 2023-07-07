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

  
  db.query('SELECT first_name, last_name FROM employee', (error, results) => {
    if (error) {
      console.error('Error retrieving from database', error);
      return;
    }

    const employeeChoices = results.map((row) => `${row.first_name} ${row.last_name}`);
  

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeChoices',
        message: 'Select an employee',
        choices: employeeChoices,
      },
    ])
    .then((answers) => {
      console.log('Selected value:', answers.employeeChoices);
    })
    .catch((error) => {
      console.error('Error during Inquirer prompt', error);
    });
  });
  // const newRole = [
  //   {
  //   type: "list",
  //   name: "newRole",
  //   message: "Enter the name of the new department",
  //   choices: [
  //     "Coordinator",
  //     "Doctor",
  //     "Market Analyst",
  //     "Practice Manager",
  //     "Lease Manager",
  //     "Senior Accountant",
  //     "Chief Executive Officer"
  //   ]
  // }];
  
  // function changeRole() {
  //   inquirer
  //     .prompt(newRole)
  //     .then((answer) => {
  //       // TODO role.name = newRole.answer
  //     })
  // }