const cars = ["Saab", "Volvo", "BMW"];

cars[0] = "Skoda";
console.log(cars.toString());

cars.push("Mercedez");
console.log(cars);
console.log(cars.pop());

//How to identify array there are two ways
console.log(Array.isArray(cars));
console.log(cars instanceof Array);

//-------------------Methods of an Array--------------------
let size = cars.length;
console.log(size);

console.log(cars.at(2));

//The join() method also joins all array elements into a string.
console.log(cars.join(" * "));
console.log(cars.shift());
console.log(cars.unshift("Honda"));
console.log(cars);

//concat method
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const childrens = myGirls.concat(myBoys);
console.log(childrens);

const newChild = myBoys.concat("Alison");
console.log(newChild);

//The copyWithin() method copies array elements to another position in an array:
const fruits = ["Banana", "Orange", "Apple", "Mango","Kiwi","Cheeku"];
const newFruits = fruits.copyWithin(3,0);//copy in index 3 all elements from index 0
console.log(newFruits);

//The flat() method creates a new array with sub-array elements concatenated to a specified depth
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);

//splice() method
fruits.splice(2,0,"Lemon","Kiwi");
console.log(fruits);

//slice() method
const citrus = fruits.slice(1,3);//last index is exclusive
console.log(citrus);


//find() The find() method returns the value of the first array element that passes a test function.
//This example finds (returns the value of) the first element that is larger than 18:

//find method takes 3 parameters 
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);

//findIndex 

let index = numbers.findIndex(myFunction);
console.log(index);

//findLast()
//findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high);

//findLastIndex()
let highIndex = temp.findLastIndex(x => x > 40);
console.log(highIndex);

//sort()
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.sort());

//reverse()
//console.log(fruits1.reverse());

//descending order
console.log(fruits1.sort().reverse());

//toSorted()

const months = ["Jan", "Feb", "Mar", "Apr"];
const sorted = months.toSorted();
console.log(months);
console.log(sorted);

//sorting numbers
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);

//forEach()
let num = [1,2,3,4,5,6];

let total = num.forEach(element => {
    console.log(element);
});
console.log(total);

//map() method

const num2 = num.map((n)=>{
    return n*n;
})
console.log(num2);

//filter() find even num
const evenNum = num.filter(n=>{
    return n%2 === 0;
})
console.log(evenNum);

//reduce() used for accumulate in a single value

const totalNum = num.reduce((n,sum)=>{
    return n+sum;
})
console.log(totalNum);









