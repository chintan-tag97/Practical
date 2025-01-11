let num = 4;
let factorial = 1;
while (num >=1) {
    factorial = factorial * num;
    num--;
}
console.log("The factorial of the given number is: " + factorial); 

let myArray = [10,20,30,40,50];
console.log("Output of for in loop");
for (let index in myArray){
    console.log(index);
}
console.log("Output of for of loop");
for(let val of myArray){
    console.log(val);
   
}

let map = new Map();

map.set('1','Chintan');
map.set(1,'www.javapoint.com');
map.set(true,'bool1');
map.set('2','Mit');

console.log("Value1=" +map.get(1));
console.log("Value2=" +map.get('1'));
console.log("Key is Present=" +map.has(3));
console.log("Size=" +map.size);
console.log("Delete value=" +map.delete(1));
console.log("New Size=" +map.size);


class Student {  
    public studCode: number;  
    private studName: string;  
    constructor(code: number, name: string){  
    this.studCode = code;  
    this.studName = name;  
    }  
    public display() {  
    return (`My unique code: ${this.studCode}, my name: ${this.studName}.`);  
    }  
    }  
      
    let student: Student = new Student(1, "JoeRoot");  
    console.log(student.display()); 
    
    
    function sum(a:number,...b:number[]): number {
        let result =a;
        for (var i = 0; i<b.length; i++){
            result += b[i];
        }
        return result;
    }
    let result1 = sum(3,5);
    let result2 = sum(3, 5,7, 9);
    console.log(result1 +"\n" + result2);


    class Student1 {
        studCode: number;
        studName: string;

        constructor(code:number,name:string){
            this.studName = name;
            this.studCode = code;
        }
        showDetail = () => console.log("Student Code:"+ this.studCode + '\nStudent1 Name: '+ this.studName)
    }
    let stud =  new Student1(101,'Chintan tandel');
    stud.showDetail();

    class A {  
        foo(arg) {  
            if (typeof (arg) === 'number')  
                return arg.toString();  
            if (typeof (arg) === 'string')  
                return arg.length;  
        }  
    }  

    
    
    let date: Date = new Date();  
console.log("Date = " + date); 

let date1: Date = new Date(); 
console.log("Year = " + date1.getFullYear());  
console.log("Date = " + date.getDate());  
console.log("Month = " + date.getMonth());  
console.log("Day = " + date.getDay());  
console.log("Hours = " + date.getHours());  
console.log("Minutes = " + date.getMinutes());  
console.log("Seconds = " + date.getSeconds()); 