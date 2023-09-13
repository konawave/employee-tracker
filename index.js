const mysql = require('mysql2');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "7674",
      database: "tracker_db",
      // TODO This info should be placed in a .env file
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

//! TODO Function to view departments

function viewDepartment() {
  try {
    db.query('SELECT * FROM department', (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log(results);
    });
  } catch (error) {
    console.error(error);
  }
}

//! TODO Function to view all roles

function viewRoles() {
  try {
    db.query(`
    SELECT  role.name AS role_name, role.id AS role_id, department.name AS department_name, role.salary AS salary
    FROM department
    JOIN role ON department.id = role.department_id
  `, (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
      console.table(results);
    });
  } catch (error) {
    console.error(error);
  }
}

//! TODO Function that adds almost everything - similar to above

function viewEmployees() {
  try {
    db.query(`
    SELECT 
e.first_name AS employee_first_name,
e.last_name AS employee_last_name,
m.first_name AS manager_first_name,
m.last_name AS manager_last_name,
r.name AS title,
r.salary AS salary,
d.name AS department_name
FROM employee AS e
LEFT JOIN employee AS m ON e.manager_id = m.id
JOIN role AS r ON e.role_id = r.id
JOIN department AS d ON r.department_id = d.id;`, (error, results) => {
      if (error) {
        console.error(error);
        return;
      }
      console.table(results);
    })  
  } catch (error) {
    console.error(error);
  }
}

//! TODO Function to add department - this should include:
  //! TODO Prompt that asks for a department name
  //! TODO should add the name into the department table
  //! TODO I think this can be done with a prepared statement?
const addDepartment = [
  {
  type: "input",
  name: "addDep",
  message: "Enter the name of the new department",
}];

function addDep() {
  inquirer
    .prompt(addDepartment)
    .then((answer) => {
        const departmentName = answer.addDep;
        db.query(`INSERT INTO department (name) VALUES ("${departmentName}")`, (error) => {
        if (error) {
          console.error(error);
          return;
        } else if (answer == null) {
            console.log("Please enter a department name");
            return;
        }
        else {console.log("Department added successfully")
          db.query(`SELECT * FROM department`, (error, results) => {
            if (error) {
              console.error(error);
              return;
            }
            console.table(results)
          } )};
      })
    })
  };

// TODO Function to change employee role
const newRole = [
  {
  type: "list",
  name: "newRole",
  message: "Enter the name of the employee's updated role",
  choices: [
    "Coordinator",
    "Doctor",
    "Market Analyst",
    "Practice Manager",
    "Lease Manager",
    "Senior Accountant",
    "Chief Executive Officer"
  ]
}];

// This query selects an employee
function changeEmployeeRole() {
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
      .then((answer) => {
        console.log('Selected value:', answer.employeeChoices);

        inquirer
          .prompt(newRole)
          .then((roleAnswer) => {
            // Enclose answer.newRole in single quotes in the SQL query
            db.query(
              'SELECT id FROM role WHERE name = ?',
              [roleAnswer.newRole], // Use an array to pass parameters
              (roleError, roleResults) => {
                if (roleError) {
                  console.error('Error finding role in database', roleError);
                  return;
                }

                if (roleResults.length === 0) {
                  console.error('Role not found in the database');
                  return;
                }

                // Extract the role ID from the results
                const roleId = roleResults[0].id;

                // Split the selected employee's name
                const [firstName, lastName] = answer.employeeChoices.split(' ');

                // Update the employee's role using parameterized query
                db.query(
                  'UPDATE employee SET role_id = ? WHERE first_name = ? AND last_name = ?',
                  [roleId, firstName, lastName],
                  (updateError) => {
                    if (updateError) {
                      console.error('Could not update chosen employee and role', updateError);
                      return;
                    }
                    console.log('Employee role updated successfully.');
                  }
                );
              }
            );
          })
          .catch((rolePromptError) => {
            console.error('Error during new role prompt', rolePromptError);
          });
      })
      .catch((error) => {
        console.error('Error during Inquirer prompt', error);
      });
  });
}

inquirer
  .prompt(navigation)
  .then((answer) => {
    switch (answer.navigation) {
      case "View all departments":
        viewDepartment();
        break;
      case "View all roles":
        viewRoles();
        break;
      case "View all employees":
        viewEmployees();
        break;
      case "Add a department":
        addDep();
        break;
      case "Update an employee role":
        changeEmployeeRole();
        break;
      case "Quit":
        console.log('Thank you for using this application!');
        break;
    }
  })
