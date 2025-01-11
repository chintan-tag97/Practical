let first: number=12.0;
let second: number=0x37CF;
let third: number=0o377;
let fourth: number=0b111001;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

let empName: string="chintan";
let empDept: string="IT"

let output1:string = empName + " works in the " + empDept + " department";
let output2:string = `${empName} works in the ${empDept} department`;

console.log(output1);
console.log(output2);


let arr:number[];
arr = [1,2,3,4]
console.log("Array[0]:" +arr[0]);
console.log("Array[1]:" +arr[1]);

var mArray:number[][] = [[1,2,3],[5,6,7]];
console.log(mArray[0][0]);
console.log(mArray[0][1]);
console.log(mArray[0][2]);
console.log();
console.log(mArray[1][0]);
console.log(mArray[1][1]);
console.log(mArray[1][2]);


let arr1:string[] = new Array("JavaTpoint","2200","Java","Abhishek");
for(var i=0;i<arr1.length;i++) {
    console.log(arr[i]);
} 

let x:any;
let arr2:string[] = ["JavaTpoint","2200","Java","Abhishek"];
for(x in arr2) {
    console.log(arr[x])
} 

let empTuple = ["Rohit Sharma",25,"JavaTpoint"];
empTuple[1] = 30;
console.log("Name of the Employee is:" + empTuple [0]);
console.log("Age of the Employee is:" + empTuple [1]);
console.log(empTuple [0] + "is working in "+empTuple [2]);

let value: number|string;
value = 120;
console.log("The Numeric value of a value is:"+value);
value = "Welcome to JavaTpoint";
console.log("The String value is :"+value);






