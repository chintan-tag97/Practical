var name1 = "Chintan";
var age = 23;
console.log("Name: ".concat(name1, ",Age:").concat(age)); // template  literals
var a = 110;
var b = 130;
var c = 150;
console.log("a: ".concat(a, ", b: ").concat(b, ", c: ").concat(c));
if (a > 110) {
    var insideVar = 'qqq';
    insideVar = '1111';
    console.log(insideVar);
}
var num1 = 27;
var str1 = "Chintan";
var bool = false;
var undef = undefined;
console.log("Addition:", num1 + 1);
console.log("String Concatenation:", str1 + " Tandel");
console.log("Logical Operation:", bool && false);
var num3 = 200;
var str2 = num3.toString();
console.log("Number: ".concat(num3, ",String: ").concat(str2));
var inferVar = 70;
console.log("Type: ".concat(typeof inferVar));
var num = 1428;
var str = num.toString();
var newNum = +str;
console.log("String: ".concat(str, ", Number: ").concat(newNum));
var user = {
    id: 1,
    name: "Chintan",
    mobile: "1234567890",
    age: 23,
    email: "chintan@gmail.com",
};
console.log(user);
var colors = ["Red", "Green", "Blue", "Orange"];
colors.push("Yellow");
colors.splice(1, 1);
colors.forEach(function (color) { return console.log(color); });
var blueIndex = colors.indexOf("Blue");
console.log("Index of Blue: ".concat(blueIndex));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["White"] = 2] = "White";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var SelectColor = Color.Blue;
console.log("Selected Color: ".concat(Color[SelectColor]));
var isNull = null;
var isUndefined = undefined;
console.log("isNull: ".concat(isNull, ", isUndefined: ").concat(isUndefined));
