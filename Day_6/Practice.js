const person = {
    name:"Vikas Mathe",
    contact:9863636300,
    age: 25
}
//we have two way to access the properties of object
let x = person.age;
let y = person["age"];
console.log(x,y);

//we can delete property of an object
delete person.age;
console.log(person);

//Nested object

const myObj = {
    name:"john",
    age:30,
    myCars:{
        car1:"Ford",
        car2:"BMW",
        car3:"Audi"
    }
}
console.log(myObj.myCars["car3"]);

//Object destructuring
const {name, age} = myObj;
console.log(name,age);
