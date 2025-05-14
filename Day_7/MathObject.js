
//Math object methods
const x = Math.round(4.5);
console.log(x);//5

const y = Math.ceil(1.1);
console.log(y);//2

const z = Math.floor(50/7);
console.log(z);//7

const a = Math.trunc(-4.2);
console.log(a);

const b = Math.sign(-55);
console.log(b);//if we write any negative value then it will return -1 and if positive then return 1 and zero then return 0.

const c = Math.pow(8, 2);
console.log(c);

const d = Math.sqrt(144);
console.log(d);

const e = Math.abs(-4.7);
console.log(e);

const min = Math.min(0, 150, 30, 20, -8, -200);
console.log(min);

const max = Math.max(0, 150, 30, 20, -8, -200);
console.log(max);

const random1 = Math.random();
console.log(random1);

//Returns a random integer from 0 to 9:
let random = Math.floor(Math.random() * 10);
console.log(random);

// Returns a random integer from 0 to 10:
Math.floor(Math.random() * 11);

//and so on..