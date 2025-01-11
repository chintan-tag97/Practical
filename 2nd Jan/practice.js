var num = 4;
var factorial = 1;
while (num >= 1) {
    factorial = factorial * num;
    num--;
}
console.log("The factorial of the given number is: " + factorial);
var myArray = [10, 20, 30, 40, 50];
console.log("Output of for in loop");
for (var index in myArray) {
    console.log(index);
}
console.log("Output of for of loop");
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var val = myArray_1[_i];
    console.log(val);
}
var map = new Map();
map.set('1', 'Chintan');
map.set(1, 'www.javapoint.com');
map.set(true, 'bool1');
map.set('2', 'Mit');
console.log("Value1=" + map.get(1));
console.log("Value2=" + map.get('1'));
console.log("Key is Present=" + map.has(3));
console.log("Size=" + map.size);
console.log("Delete value=" + map.delete(1));
console.log("New Size=" + map.size);
var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    Student.prototype.display = function () {
        return ("My unique code: ".concat(this.studCode, ", my name: ").concat(this.studName, "."));
    };
    return Student;
}());
var student = new Student(1, "JoeRoot");
console.log(student.display());
function sum(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var result = a;
    for (var i = 0; i < b.length; i++) {
        result += b[i];
    }
    return result;
}
var result1 = sum(3, 5);
var result2 = sum(3, 5, 7, 9);
console.log(result1 + "\n" + result2);
var Student1 = /** @class */ (function () {
    function Student1(code, name) {
        var _this = this;
        this.showDetail = function () { return console.log("Student Code:" + _this.studCode + '\nStudent1 Name: ' + _this.studName); };
        this.studName = name;
        this.studCode = code;
    }
    return Student1;
}());
var stud = new Student1(101, 'Chintan tandel');
stud.showDetail();
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.foo = function (arg) {
        if (typeof (arg) === 'number')
            return arg.toString();
        if (typeof (arg) === 'string')
            return arg.length;
    };
    return A;
}());
var date = new Date();
console.log("Date = " + date);
var date1 = new Date();
console.log("Year = " + date1.getFullYear());
console.log("Date = " + date.getDate());
console.log("Month = " + date.getMonth());
console.log("Day = " + date.getDay());
console.log("Hours = " + date.getHours());
console.log("Minutes = " + date.getMinutes());
console.log("Seconds = " + date.getSeconds());
