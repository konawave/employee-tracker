// const mysql = require('mysql2');
// const inquirer = require('inquirer');

// const db = mysql.createConnection(
//     {
//       host: "localhost",
//       user: "root",
//       password: "rootpassword",
//       database: "employees_db",
//     },
//     console.log(`Connected to the employees_db database.`)
//   );

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
        "Update an employee role"

    ]
  }
]

console.log(navigation.choices)
// db.query()




// inquirer
//     .prompt([{
//         type: 'list',
//         message:'Select an option',
//         name: 'directory',
//         choices: ['view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee']
//     }
// ])
// .then((response) => {
//     if (response.choices === response.choices[0]) {
//         x = 2
//     }}
// );
    //   .catch((error) => {
    //     if (error.isTtyError) {
    //       // Prompt couldn't be rendered in the current environment
    //     } else {
    //       // Something else went wrong
    //     }
    //   });



