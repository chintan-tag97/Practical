var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// //11Write a TypeScript program to merge two array
var array1 = [1, 2, 3];
var array2 = [11, 22, 33];
var mergedArray = __spreadArray(__spreadArray([], array1, true), array2, true); //stread operator
console.log("Merged Array:", mergedArray);
// const newArray1: number[] = array1.concat(array2);
// console.log(newArray1);
// 12. Write a TypeScript program to merge two array of object [props: id,name,mobile]
var user1 = [
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
var mergeArray = __spreadArray([], user1, true);
console.log("Merge Array Of Object: ", mergeArray);
// 13. Write a TypeScript program to add new object in array [props: id,name,mobile] (use spread operator)
var array3 = [
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
var array4 = {
    id: 3,
    name: "pqr",
    mobile: 99887766,
};
var newArray = __spreadArray(__spreadArray([], array3, true), [array4], false);
console.log("NewArray:", newArray);
// 14. Write a TypeScript program to demonstrate the use of template literals.
var Name1 = "Chintan";
var Age1 = 23;
console.log("Name: ".concat(name1, ",Age:").concat(age)); // template  literals
// 15. Write a TypeScript program to demonstrate the callback function.
function processNumber(num, callback) {
    var result = num * 2;
    callback(result);
}
processNumber(5, function (result) {
    console.log("Processed Number:", result);
});
var employee = [
    { id: 1, name: "xyz", age: 21, salary: 15000, mobile: "1234567890" },
    { id: 2, name: "abc", age: 22, salary: 11000, mobile: "9876543210" },
    { id: 3, name: "pqr", age: 23, salary: 13000, mobile: "1122334455" },
    { id: 4, name: "mno", age: 24, salary: 12000, mobile: "6677889900" },
    { id: 5, name: "mno", age: 24, salary: 12000, mobile: "6666666666" },
    { id: 5, name: "def", age: 25, salary: 10000, mobile: "4455667788" },
];
var Employees = employee.filter(function (emp) { return emp.age > 23; });
var Employee = employee.find(function (emp) { return emp.name === "mno"; });
console.log("Filtered Employees:", Employees);
console.log("First Employee Found:", Employee);
var employees = [
    { id: 1, name: "xyz", age: 21, salary: 15000, mobile: "1234567890" },
    { id: 2, name: "abc", age: 22, salary: 11000, mobile: "9876543210" },
    { id: 3, name: "pqr", age: 23, salary: 13000, mobile: "1122334455" },
    { id: 4, name: "mno", age: 24, salary: 12000, mobile: "6677889900" },
    { id: 5, name: "def", age: 25, salary: 10000, mobile: "4455667788" },
];
var totalSalary = employees.reduce(function (sum, emp) { return sum + emp.salary; }, 0);
console.log("Total Salary:", totalSalary);
// 18. Write a TypeScript program to to sort array (take 5-10 records with this props: id, name, age, salary, mobile)
//   18.1. sort with 'name'
var employee2 = [
    { id: 1, name: "xyz", age: 21, salary: 15000, mobile: "1234567890" },
    { id: 2, name: "abc", age: 25, salary: 11000, mobile: "9876543210" },
    { id: 3, name: "pqr", age: 23, salary: 13000, mobile: "1122334455" },
    { id: 4, name: "mno", age: 24, salary: 12000, mobile: "6677889900" },
    { id: 5, name: "def", age: 21, salary: 10000, mobile: "4455667788" },
];
var asort = employee2.sort(function (a, b) { return a.name.localeCompare(b.name); });
console.log("Sorted by Name:", asort);
//    18.2  sort with 'age'
var employee3 = [
    { id: 1, name: "xyz", age: 21, salary: 15000, mobile: "1234567890" },
    { id: 2, name: "abc", age: 25, salary: 11000, mobile: "9876543210" },
    { id: 3, name: "pqr", age: 23, salary: 13000, mobile: "1122334455" },
    { id: 4, name: "mno", age: 24, salary: 12000, mobile: "6677889900" },
    { id: 5, name: "def", age: 21, salary: 10000, mobile: "4455667788" },
];
var bsort = employee3.sort(function (a, b) { return a.age - b.age; });
console.log("Sorted by Age:", bsort);
