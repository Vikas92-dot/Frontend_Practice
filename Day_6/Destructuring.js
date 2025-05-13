//Object destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  printName:function (){
    console.log(this.firstName);
    
  }
};
let {firstName, lastName, country="US"} = person;
console.log(firstName, lastName, country);

//Object Property Alias
let {lastName : name} = person;
console.log(lastName);

//String Destructuring
//One use for destructuring is unpacking string characters.

let demo = "W3Schools";
let [a1, a2, a3, a4, a5] = demo;
console.log(a1, a2, a3, a4, a5);

//Array Destructuring
//We can pick up array variables into our own variables

const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// let [fruit1, fruit2] = fruits;
// console.log(fruit1, fruit2);

//Skipping Array Values
//We can skip array values using two or more commas

let [fruit1,,,fruit2] = fruits;
console.log(fruit1, fruit2);

//The rest property
//You can end a destructuring syntax with a rest property.
//This syntax will store all remaining values into a new array

const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a,b, ...rest] = numbers
console.log(a,b);

//Swapping JavaScript Variables
//You can swap the values of two variables using a destructuring assignment

let first = "John";
let last = "Doe";

// Destructing
[first, last] = [last, first];
console.log(first, last);

const ff =()=>{
  console.log(this);
}
ff();