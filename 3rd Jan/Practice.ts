//1. Write a TypeScript program that declares a variable 'name' and assigns it a string value. Also declare a variable 'age' and assign it a number value. Finally print the values of name and age (using template literals).

let name1: string = "Chintan";
let age: number = 23;
console.log(`Name: ${name1},Age:${age}`); // template  literals

//2. Write a TypeScript program that declares variables using let, const, and var. Then, describe how each declaration type behaves with respect to scoping and mutability.

let a: number = 110;
const b: number = 130;
var c: number = 150;
console.log(`a: ${a}, b: ${b}, c: ${c}`);
if(a>110){
    let insideVar = 'qqq';
    insideVar= '1111'
    console.log(insideVar);
}

//3. Write a TypeScript program that declares variables of the following data types: number, string, boolean, and undefined. Assign values to them and perform basic operations.

let num1: number = 27;
let str1: string = "Chintan";
let bool: boolean = false;
let undef: undefined = undefined;
console.log("Addition:", num1 + 1);
console.log("String Concatenation:", str1 + " Tandel");
console.log("Logical Operation:", bool && false);

//4. Write a TypeScript program that declares a variable as a number and then tries to assign a string to it to see type checking in action.

let num3: number = 200;
let str2 : string = num3.toString();
console.log(`Number: ${num3},String: ${str2}`);

//5. Write a TypeScript program that declares a variable as a number and then tries to assign a string to it to see type checking in action.

let inferVar = 70; 
console.log(`Type: ${typeof inferVar}`);

//6. Write a TypeScript program that converts a variable of one type to another using type assertions and type conversion from number-to-string and string-to-number.

let num: number = 1428;
let str: string = num.toString(); 
let newNum: number = +str; 
console.log(`String: ${str}, Number: ${newNum}`);

//7. Write a TypeScript program that creates type aliases for objects. Use them to define variables and explain how they improve code readability.
//   A. Define a type alias for a 'user' object (props: id, name, mobile, age, email)[should be appropriate prop-types]

type User = {
  id: number;
  name: string;
  mobile: string;
  age: number;
  email: string;
};

//   B. Create a variable using the type aliases (for above user type alias)

let user: User = {
  id: 1,
  name: "Chintan",
  mobile: "1234567890",
  age: 23,
  email: "chintan@gmail.com",
};
console.log(user);

// Write a TypeScript program that declares an array of a specific data type.
//It will demonstrates common array operations like adding elements, removing elements, and iterating through the array and find index of "Blue" (use appropriate methods).
//(sample string array: ["Red", "Green", "Blue", "Orange"])

let colors: string[] = ["Red", "Green", "Blue", "Orange"];
colors.push("Yellow");
colors.splice(1, 1);
colors.forEach((color) => console.log(color));
let blueIndex = colors.indexOf("Blue");
console.log(`Index of Blue: ${blueIndex}`);

//9. Write a TypeScript program that defines an enumeration 'Color' with values 'Red', 'Green', 'White' and Blue. Create a variable 'selectedColor' of type 'Color' and assign it one of the enumeration values.

enum Color {
  Red,
  Green,
  White,
  Blue,
}
let SelectColor: Color = Color.Blue;
console.log(`Selected Color: ${Color[SelectColor]}`);

//10.Write a TypeScript program that declares a variable 'isNull' and assigns it null. You should also declare a variable called 'isUndefined' and assign it an undefined value and check log what it prints.

let isNull : null = null;
let isUndefined: undefined = undefined;
console.log(`isNull: ${isNull}, isUndefined: ${isUndefined}`);


