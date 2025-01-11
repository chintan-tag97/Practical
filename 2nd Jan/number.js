var first = 12.0;
var second = 0x37CF;
var third = 255;
var fourth = 57;
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
var empName = "chintan";
var empDept = "IT";
var output1 = empName + " works in the " + empDept + " department";
var output2 = "".concat(empName, " works in the ").concat(empDept, " department");
console.log(output1);
console.log(output2);
var arr;
arr = [1, 2, 3, 4];
console.log("Array[0]:" + arr[0]);
console.log("Array[1]:" + arr[1]);
var mArray = [[5, 6, 7]];
console.log(mArray[0][0]);
console.log(mArray[0][1]);
console.log(mArray[0][2]);
console.log();
console.log(mArray[1][0]);
console.log(mArray[1][1]);
console.log(mArray[1][2]);
var arr1 = new Array("JavaTpoint", "2200", "Java", "Abhishek");
for (var i = 0; i < arr1.length; i++) {
    console.log(arr[i]);
}
var x;
var arr2 = ["JavaTpoint", "2200", "Java", "Abhishek"];
for (x in arr2) {
    console.log(arr[x]);
}
var empTuple = ["Rohit Sharma", 25, "JavaTpoint"];
empTuple[1] = 30;
console.log("Name of the Employee is:" + empTuple[0]);
console.log("Age of the Employee is:" + empTuple[1]);
console.log(empTuple[0] + "is working in " + empTuple[2]);
var value;
value = 120;
console.log("The Numeric value of a value is:" + value);
value = "Welcome to JavaTpoint";
console.log("The String value is :" + value);
