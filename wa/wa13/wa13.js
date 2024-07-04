// Problem 1: Create JSON for employees and company
let employees = [
  {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true,
  },
  {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true,
  },
  {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false,
  },
];
employees.forEach((e) => {
  console.log("first name: " + e.firstName);
  console.log("department: " + e.department);
  console.log("designation: " + e.designation);
  console.log("salary: " + e.salary);
  console.log("raise eligible: " + e.raiseEligible);
});

// Problem 2: Add a new employee
let company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employees,
};

console.log("Problem 2:");
console.log(company);
console.log("Employees");
company.employees.forEach((e) => {
  console.log("first name: " + e.firstName);
  console.log("department: " + e.department);
  console.log("designation: " + e.designation);
  console.log("salary: " + e.salary);
  console.log("raise eligible: " + e.raiseEligible);
});
// Problem 3: new employee

let newEmployee = {
  firstName: "Anna",
  department: "Tech",
  designation: "Executive",
  salary: 25600,
  raiseEligible: false,
};
company.employees.push(newEmployee);

console.log("\nProblem 3:");
console.log("New Employee");
let Last=company.employees.length-1
console.log(company.employees[Last]);

// Problem 4: calculate total salary
function calculateTotalSalary(company) {
  let totalSalary = 0;
  company.employees.forEach((employee) => {
    totalSalary += employee.salary;
  });
  return totalSalary;
}

console.log("\nProblem 4:");
console.log("Total company salary:", calculateTotalSalary(company));

// Problem 5: eligible raises
function applyRaises(company) {
  company.employees.forEach((employee) => {
    if (employee.raiseEligible) {
      employee.salary *= 1.1; // 10% raise
      employee.raiseEligible = false;
    }
  });
}

console.log("\nProblem 5:");
applyRaises(company);
console.log("Company after applying raises:");
company.employees.forEach((e) => {
  console.log("first name: " + e.firstName);
  console.log("department: " + e.department);
  console.log("designation: " + e.designation);
  console.log("salary: " + e.salary);
  console.log("raise eligible: " + e.raiseEligible);
});


// Problem 6: Working from Home
let employeesWorkingFromHome = ["Anna", "Sam"];
company.employees.forEach((employee) => {
  employee.wfh = employeesWorkingFromHome.includes(employee.firstName);
});

console.log("\nProblem 6:");
console.log("Company after updating WFH status:");
company.employees.forEach((e) => {
  console.log("first name: " + e.firstName);
  console.log("department: " + e.department);
  console.log("designation: " + e.designation);
  console.log("salary: " + e.salary);
  console.log("raise eligible: " + e.raiseEligible);
});

