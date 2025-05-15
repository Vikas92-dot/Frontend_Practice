//every() method of array
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18);

//some() checks if some array value pass a test

let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18);

//from() method

const myArr = Array.from("ABCDEFG");
console.log(myArr);


var a = 55;
function my(){
    console.log(a);
}

let num = new Number("100");
let res = num + "sda";
console.log(res);
console.log(typeof res);

let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
console.log(obj);

const person = {
  fname: "John",
  lname: "Doe",
  printName:function(city,country){
    console.log(`My Name is ${this.fname} ${this.lname} and I am from ${city},${country}.`);
  }
}
person.printName("Canbara","Australia");

const person1 = {
  fname: "Virat",
  lname: "Kohli"
}
//call
person.printName.call(person1,"Delhi","India");

//apply
person.printName.apply(person1,["Delhi","India"]);

//bind
let print = person.printName.bind(person1,"Delhi","India");
print();

function OuterFunction(){
    let x = 10;

    return function innerFunction(){
      console.log(x);
      
    }
}

