// 1.Write a JavaScript program to convert a string into upper-case

let str ="Hello World";
let UpperStr = str.toUpperCase();
console.log(UpperStr);

// 2.Write a JavaScript program to convert a string into title-case (capitalize the first letter of each word).

function toTitleCase(str) {
  return str3.toLowerCase().split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}


let str3 = "my name is chintan";
// ['my', 'name', 'is', 'chintan'].map()
let titleStr = toTitleCase(str);
console.log(titleStr); 
// 3.Write a JavaScript program to convert a string into lower-case

let str1 ="Java Script";
let lowerStr = str1.toLowerCase();
console.log(lowerStr);




// 4.Write a JavaScript program to reverse string (consider this string:- "Good Morning")


let s = "Good Morning";
const ans = s.split('').reverse().join('');
console.log(ans);
// 5.Write a JavaScript program to convert string to number (consider this string:- "123")

var num1 = '123';
document.getElementById("demo1").innerHTML =
Number("123")
// 2
document.getElementById("demo1").innerHTML = Number(num1)
document.getElementById("demo1").innerHTML = parseInt(num1);
document.getElementById("demo1").innerHTML = +num1;

// 6.Write a JavaScript program to convert number to string (consider this number:- 9951)

var num2 = 9951;
document.getElementById("demo2").innerHTML =
String(9951);
document.getElementById("demo2").innerHTML = num2.toString();
 
// 8.Write a JavaScript program to check Typeof variable which we pass through param in function (whether it is string/number/array/object)

document.getElementById("demo4").innerHTML = 
"'Java' is " + typeof "John" + "<br><br>" +
"33 is " + typeof 33 + "<br><br>" +
"x is " + typeof x;

var arr101 = [1,2,3];
console.log('A1=>', typeof arr101);

// 9.Write a JavaScript program to find the given number is odd or even


function checkOddEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} is Even`);
    } else {
        console.log(`${number} is Odd`);
    }
    // to ternary?
}
checkOddEven(5);

function checkOddEven(number) {
  console.log(`${number} is ${number % 2 === 0 ? "Even" : "Odd"}`);
}

checkOddEven(8); 

// 10.Write a JavaScript program to swap 2 values (with two approaches: with and without 3rd variable)


let a = 15, b=20;
let temp = a;
a=b;
b=temp;
console.log(a,b);
// without 3rd variable?

Variable(5, 10); 
function Variable(x, y) {
 

  x = x + y; 
  y = x - y;  
  x = x - y;  
  
  console.log(` x = ${x}, y = ${y}`);
}


// 11.Write a JavaScript program to find no. of items inside a array (consider this array:-[1,2,3,5,6,7,8,9,10])


let array=[1,2,3,4,5,6,7,8,9,10]
console.log(array.length);

// 12.Write a JavaScript program to get SUM of all items in array (consider this array:-[1,2,3,5,6,7])

const num = [1, 2, 3, 5, 6, 7];
document.getElementById("demo7").innerHTML = num.reduce(Sum, 0);
function Sum(total,num){
  return total + Math.round(num);
} 

// 13.Write a JavaScript program to remove repeated number from array (consider this array:-[1,2,1,5,6,7])

const arr1 = [1, 2, 1, 5, 6, 7];
const Arr = [new Set(arr1)];
console.log(Arr);

// 14.Write a JavaScript function to split a string with "," and convert it into an array of words. (consider this string:-"Hello, Good Morning, How are you?,")

const str2 = "Hello, Good Morning, How are you?,";
const words = str2.split(',')

console.log(words);

// 15.Write a JavaScript program to add value at first and last in array.

let arr2 = [1,2,3,4,5];
arr2.push(6);
arr2.unshift(0);
console.log(arr2);

// 16.Write a JavaScript program to remove first and last element from array

let arr3 = [10,20,30,40];
arr3.pop(40);
arr3.shift(10);
console.log(arr3);

// 17.Write a JavaScript program to add and remove element in array using splice() method.

let arr4 = [11,22,33,44,55];
arr4.splice(1,1,77); 
arr4.splice(3)
console.log(arr4);

// 18.Write a JavaScript program to demonstrate slice() method of array. (consider this array:-[1,2,3,4,5,6,7]) =>  Output should be=>[3,4,6]

let arr6 = [1, 2, 3, 4, 5, 6, 7];
let sliced = arr6.slice(2, 6).filter(num => num !== 5);
console.log(sliced);

// 19.Write a JavaScript program to add object in array. (consider this properties: id, name, email)


const person1 = ["id:1", "name:Chintan"];
person1.push("email:chintan@gmail.com");
console.log(person1);

const person2 = ["id:3", "name:Chintan","age:23","salary:5000","mobile:1234567890"];
console.log(person2);

//20.Write a JavaScript program to print SUM of 'salary' (take 5-10 records with this props: id, name, age, salary, mobile)

const employees = [
  { id: 1, name: 'Chintan', age: 23, salary: 10000, mobile: 1234567890 },
  { id: 2, name: 'Isha', age: 24, salary: 15000, mobile: 9876543210 },
  { id: 3, name: 'Pearl', age: 22, salary: 20000, mobile: 1233445566 },
  { id: 4, name: 'Aditi', age: 25, salary: 25000, mobile: 9900880077 },
  { id: 5, name: 'Raj', age: 26, salary: 15000, mobile: 7755332211 },
  
];
const totalSalary = employees.reduce((sum, employees) => sum + employees.salary, 0);
console.log("Total Salary:", totalSalary);

//21.Write a JavaScript program to filter all data which have age greeter then 25 (take 5-10 records with this props: id, name, age, salary, mobile

const employee = [
  { id: 1, name: 'Chintan', age: 23, salary: 10000, mobile: 1234567890 },
  { id: 2, name: 'Isha', age: 24, salary: 15000, mobile: 9876543210 },
  { id: 3, name: 'Pearl', age: 26, salary: 20000, mobile: 1233445566 },
  { id: 4, name: 'Aditi', age: 25, salary: 25000, mobile: 9900880077 },
  { id: 5, name: 'Raj', age: 26, salary: 15000, mobile: 7755332211 },
  
];

const Employee = employee.filter(employee => employee.age > 25);
console.log("Employees with age greater than 25:", Employee);

//22.Write a JavaScript program to demonstrate forEach() loop and print name in console (take 5-10 records with this props: id, name, age, salary, mobile)
// 23.Write a JavaScript program to print obj in console.log() with given properties (id, name, age, salary, mobile)

const employee1 = [
  { id: 1, name: 'Chintan', age: 23, salary: 10000, mobile: 1234567890 },
  { id: 2, name: 'Isha', age: 24, salary: 15000, mobile: 9876543210 },
  { id: 3, name: 'Pearl', age: 26, salary: 20000, mobile: 1233445566 },
  { id: 4, name: 'Aditi', age: 25, salary: 25000, mobile: 9900880077 },
  { id: 5, name: 'Raj', age: 26, salary: 15000, mobile: 7755332211 },
  
];
employee1.forEach(employee1 => {
  console.log("Name:", employee1.name);
});

// 24.Write a JavaScript program to add new property in existing object


let obj1 = { name: "Chintan" };
obj1.age = 23;
obj1['address'] = 'asd';
console.log(obj1);

// 25.Write a JavaScript program to delete property from object

let obj2 = { carname: "XUV", color: "white", no: 1234 };
delete obj2.color;
console.log(obj2);

// 26.Write a JavaScript program to check whether the property is exist in object or not

let obj3 = { name: "Alice" };
console.log('age' in obj3);

// 28.Write a JavaScript program to toggle button color on click (RED/GREEN wise-versa) [using if condition]


const button = document.getElementById("toggleButton1");

button.addEventListener("click", () => {
  if (button.style.backgroundColor === "red") {
    button.style.backgroundColor = "green";
  } else {
    button.style.backgroundColor = "red";
  }
});

// 29.Write a JavaScript program to open-up confirmation-pop-up on button click and if confirmed show alert with "Success" text (RED/GREEN wise-versa)

function showPopup() {
  confirm("First Comform ?")  
    alert("Success");
}

  // show confirmation ?

// try?

// 32.Write a JavaScript program to generate random number (from 1-to-100)

function showRandom() {
  let c = Math.random()*100;
  document.getElementById("demo9").innerHTML = c;

}

//31.Write a JavaScript program to demonstrate ternary condition (take any boolean flag) [same 28 ques with ternary operator]
  // 
function toggleColor() {
  let button = document.getElementById('toggleButton');
  button.style.backgroundColor = button.style.backgroundColor === 'red' ? 'green' : 'red';
}

// 33. Write a JavaScript program to add bonus of 5000  in salary for every employee.
// consider below array:
// employees = [ { name: "John", salary: 50000 }, { name: "Jane", salary: 60000 }, { name: "Mike", salary: 45000 }, { name: "Sarah", salary: 70000 } ]
const employee2=[
  { id: 1, name: 'Chintan', age: 23, salary: 10000, mobile: 1234567890 },
  { id: 2, name: 'Isha', age: 24, salary: 15000, mobile: 9876543210 },
  { id: 3, name: 'Pearl', age: 26, salary: 20000, mobile: 1233445566 },
  { id: 4, name: 'Aditi', age: 25, salary: 25000, mobile: 9900880077 },
  { id: 5, name: 'Raj', age: 26, salary: 15000, mobile: 7755332211 },
  
];


employee2.forEach(employee2=> {
  employee2.salary += 5000;
});
// use map() instead
console.log(employee2);



const employee3 = [
  { id: 1, name: 'Chintan', age: 23, salary: 10000, mobile: 1234567890 },
  { id: 2, name: 'Isha', age: 24, salary: 15000, mobile: 9876543210 },
  { id: 3, name: 'Pearl', age: 26, salary: 20000, mobile: 1233445566 },
  { id: 4, name: 'Aditi', age: 25, salary: 25000, mobile: 9900880077 },
  { id: 5, name: 'Raj', age: 26, salary: 15000, mobile: 7755332211 },
];

const Employees = employee3.map(employee => {
  return {employee, salary: employee.salary + 7000 };
});

console.log(Employees);




    
  
  
    
      
    