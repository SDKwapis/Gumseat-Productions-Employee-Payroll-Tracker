// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn')

let logFirstName = ""
let logLastName = ""
let logSalary = ""

let employeesArray = [];

const collectEmployees = function(){ 
    while (true) {
      let logFirstName = window.prompt(`Enter first name:`);
      if (logFirstName === null) break; // If user cancels, exit the loop
      let logLastName = window.prompt(`Enter last name:`);
      if (logLastName === null) break; // If user cancels, exit the loop
      let logSalary = window.prompt(`Enter salary:`);
      if (isNaN(logSalary)) { // Validate salary input
        alert("Salary must be a number. Please enter a valid salary.");
        continue; // Restart the loop
      }
      // Add employee to the array
      let employee = {
        firstName: logFirstName,
        lastName: logLastName,
        salary: logSalary
      }
      employeesArray.push(employee)
      
      let addAnother = window.confirm(`Add another employee?`);
      if (!addAnother){ // If user chooses not to add another employee, exit the loop 
        break;
      } else {
        continue; // Restart the loop
      } 
    }
    return employeesArray; 
  }
 

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const avgSal = []
  for (let i = 0; i < employeesArray.length; i++) {    
    const cashAvg = parseFloat(employeesArray[i].salary);
    avgSal.push(cashAvg);
  }
let sum = 0;
for(let i = 0; i < avgSal.length; i++){
  sum += avgSal[i];
}
const avg = sum/avgSal.length
console.log(`The average employee salary is: ${avg}`)
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    // Retrieve the randomly selected employee
    const randomEmployee = employeesArray[randomIndex];
    // Log the randomly selected employee to the console
    console.log("Randomly selected employee:", randomEmployee);
    // Return the randomly selected employee
    return randomEmployee;
}

  



/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

