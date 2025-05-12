//if you declare value or not it will return undefined.
console.log(carname);
var carname = "BMW";
//------------------------------
bikeName = "R15";
console.log(bikeName);

var bikeName;
//------------Const examples--------------
const PI = 3.141598763;
// PI = 3.14; //error
// PI = PI + 10; //error

//const arrays

const cars = ["BMW","Audi","Volvo"];
//cars.pop();
cars[0] = "Honda";
cars.push("Sedan");
console.log(cars);

//but you can not reassign an array
//cars = ["Toyota", "Volvo", "Audi"];

//const objects
const person ={
    name:"Vikas",
    contact:920000000,
    place:"Indore"
}
person.contact = 9826868300;
console.log(person);    

//---------------JS Operators-------------------
console.log(5+5);
console.log("5"+5); // Other than + operator all operator will treat it as a number.
console.log("5"-5);
console.log("5"*5);
console.log("Hello"+5);

let x = [1,2,2];
console.log(typeof x);

console.log(null+1); //1
console.log(undefined+1);//NaN
console.log(true+1);//2

//to check given value is number or not?
function isRealNumber(value){
    return typeof value === "number" && !Number.isNaN(value);
}
console.log(isRealNumber(12));
console.log(isRealNumber("12"));
console.log(isRealNumber(undefined));
console.log(isRealNumber(null));

//incrementing operator
let y = 5;
console.log(y);
y--;
console.log(y);

//Exponentiation operator
let xx = 5;
let z = xx ** 2;
console.log(z);
//it's same as Math.pow
console.log(Math.pow(xx,y));

let res = (100 + 50) * 3;
//When many operations have the same precedence (like addition and subtraction or multiplication and division), they are computed from left to right:

let result = 100 + 50 - 3;
console.log(result);

//Left shift assignemnt operator
let l = -100;
l <<= 5;
console.log(l);

//When adding a number and a string, JavaScript will treat the number as a string.
let f = 16 + "Volvo";
console.log(f);

//When we write numbers ahead then it will treat as numbers 
let f1 = 16+4+"Volvo";
console.log(f1);

//But when we write numbers behind then it will treat as String
let f2 = "Volvo"+16+4;
console.log(f2);

//JavaScript Types are Dynamic
//JavaScript has dynamic types.This means that the same variable can be used to hold different data types:
let g; 
g=5; 
g="John";

//Exponential Notation
//Extra large or extra small numbers can be written with scientific (exponential) notation:
let ex = 123e5; //12300000
console.log(ex);

let ez = 123e-5;
console.log(ez); //0.00123

//BigInt

let big = BigInt("123456789012345678901234567890");
console.log(big);

//----------Functions-------------
let ress = multiplication(20,40);
console.log(ress);

function multiplication(x,y){
    return x*y;
}

//---------Objects------------
//let person1 = {}; //Object literal 
const person1 = new Object();

person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 60;
person1.eyeColor = 'green';

console.log(person1);

const person2 ={
    firstName: "Virat",
    lastName: "Kohli",
    profession: "Cricketer",
    fullName: function(){
        return `The King ${this.firstName} ${this.lastName}`;
    }
}
console.log(person2.fullName());

const newp = person2;
newp.firstName = "Cheeku"; //it will change the person2 value
console.log(person2);













