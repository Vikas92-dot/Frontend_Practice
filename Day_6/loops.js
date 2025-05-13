//for of loop
//Use it to directly iterate over the values of an array, string, or any iterable object.
let fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
  console.log(fruit);
}


//for in  loop
//Use it to iterate over the properties (keys) of an object.

let person = {name:"John", age:25};
for(let key in person){
    console.log(key, person[key]);
    
}