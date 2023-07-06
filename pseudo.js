// !GIVEN a command-line application that accepts user input
// !WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

//! TODO Create navigation object with every option listed in acceptance criteria
    //! TODO SWITCH CASE IS HELLA NICE HERE
    // TODO When user chooses "View all departments", they are shown the departments table
    // TODO When the user selects "View all roles", they are shown the roles table
    // TODO When the user chooses "View all employees", they are shown all tables joined together. Use keys and JOIN options to make this work!
    // TODO When the user chooses "Add a department", they are prompted to add a department name. This department should also have a generated ID!
    // TODO When the user clicks "Update an employee role", they should be be promoted to select an existing employee. Once they make their selection,  they should be prompted to choose a new role for them. This should be a list of the existing roles!