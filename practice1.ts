// //11Write a TypeScript program to merge two array
let array1: number[] = [1, 2, 3];
let array2: number[] = [11, 22, 33];
let mergedArray = [...array1, ...array2]; //stread operator
console.log("Merged Array:", mergedArray);

// const newArray1: number[] = array1.concat(array2);
// console.log(newArray1);

// 12. Write a TypeScript program to merge two array of object [props: id,name,mobile]
let user1 = [
  {
    id: 1,
    name: "abc",
    mobile: 1234567890,
  },
  {
    id: 2,
    name: "xyz",
    mobile: 9876543210,
  },
];
// let array3 = [1, "abc", 1234567890];
// let array4 = [2, "xyz", 9876543210];
let mergeArray = [...user1];
console.log("Merge Array Of Object: ", mergeArray);

// 13. Write a TypeScript program to add new object in array [props: id,name,mobile] (use spread operator)
let array3: { id: number; name: string; mobile: number }[] = [
    {
      id: 1,
      name: "abc",
      mobile: 1234567890,
    },
    {
      id: 2,
      name: "xyz",
      mobile: 9876543210,
    },
  ];
  
  let array4 = {
    id: 3,
    name: "pqr",
    mobile: 99887766,
  };
  
 
  let newArray = [...array3, array4];
  console.log("NewArray:", newArray);
  


// 14. Write a TypeScript program to demonstrate the use of template literals.
let Name1: string = "Chintan";
let Age1: number = 23;
console.log(`Name: ${name1},Age:${age}`); // template  literals

// 15. Write a TypeScript program to demonstrate the callback function.

function processNumber(num: number, callback: (result: number) => void) {
  let result = num * 2;
  callback(result);
}

processNumber(5, (result) => {
  console.log("Processed Number:", result);
});

// 16. Write a TypeScript program to demonstrate filter() and find() difference (take 5-10 records with this props: id, name, age, salary, mobile)
type emp = {
  id: number;
  name: string;
  age: number;
  salary: number;
  mobile: string;
};

let employee: emp[] = [
  { id: 1, name: "xyz", age: 21, salary: 15000, mobile: "1234567890" },
  { id: 2, name: "abc", age: 22, salary: 11000, mobile: "9876543210" },
  { id: 3, name: "pqr", age: 23, salary: 13000, mobile: "1122334455" },
  { id: 4, name: "mno", age: 24, salary: 12000, mobile: "6677889900" },
  { id: 5, name: "mno", age: 24, salary: 12000, mobile: "6666666666" },
  { id: 5, name: "def", age: 25, salary: 10000, mobile: "4455667788" },
];

let Employees = employee.filter((emp) => emp.age > 23);
let Employee = employee.find((emp) => emp.name === "mno");

console.log("Filtered Employees:", Employees);
console.log("First Employee Found:", Employee);

// 17. Write a TypeScript program to declaare interface of employee and use that interface type in required places and then print SUM of 'salary
//    (take 5-10 records with this props: id, name, age, salary, mobile)
interface employee1 {
  id: number;
  name: string;
  age: number;
  salary: number;
  mobile: string;
}

let employees: employee1[] = [
  { id: 1, name: "xyz", age: 21, salary: 15000, mobile: "1234567890" },
  { id: 2, name: "abc", age: 22, salary: 11000, mobile: "9876543210" },
  { id: 3, name: "pqr", age: 23, salary: 13000, mobile: "1122334455" },
  { id: 4, name: "mno", age: 24, salary: 12000, mobile: "6677889900" },
  { id: 5, name: "def", age: 25, salary: 10000, mobile: "4455667788" },
];

let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary:", totalSalary);

// 18. Write a TypeScript program to to sort array (take 5-10 records with this props: id, name, age, salary, mobile)
//   18.1. sort with 'name'

let employee2: emp[] = [
  { id: 1, name: "xyz", age: 21, salary: 15000, mobile: "1234567890" },
  { id: 2, name: "abc", age: 25, salary: 11000, mobile: "9876543210" },
  { id: 3, name: "pqr", age: 23, salary: 13000, mobile: "1122334455" },
  { id: 4, name: "mno", age: 24, salary: 12000, mobile: "6677889900" },
  { id: 5, name: "def", age: 21, salary: 10000, mobile: "4455667788" },
];

let asort = employee2.sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by Name:", asort);

//    18.2  sort with 'age'

let employee3: emp[] = [
    { id: 1, name: "xyz", age: 21, salary: 15000, mobile: "1234567890" },
    { id: 2, name: "abc", age: 25, salary: 11000, mobile: "9876543210" },
    { id: 3, name: "pqr", age: 23, salary: 13000, mobile: "1122334455" },
    { id: 4, name: "mno", age: 24, salary: 12000, mobile: "6677889900" },
    { id: 5, name: "def", age: 21, salary: 10000, mobile: "4455667788" },
  ];
let bsort = employee3.sort((a, b) => a.age - b.age);
console.log("Sorted by Age:", bsort);
