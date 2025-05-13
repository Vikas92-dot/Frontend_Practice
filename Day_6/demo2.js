//\" inserts a double quote in a string:
let text = "We are the so called \"Viking\" from the North."
console.log(text);

//\' inserts a single quote in  a string:
let text1 = 'It\'s alright.'
console.log(text1);

// \\ inserts a backslash in a string.

let x = new String("john");
let y = new String("john");

//Comparing javascript objects always returns false.
console.log(x == y);
console.log(x === y);

//------------Strings Methods------------

//Slice(start,end);
let str = "Apple, Kiwi, Bananas, Orange";
let part = str.slice(7,13);
console.log(part);

//substring

let part2 = str.substring(-4,4);
console.log(part2);

let part3 = str.slice(-6,-3);
console.log(part3);

//trim method
let trim = "              hii guys         ";
console.log(trim.trimEnd());

//pad Start
let newText = "5";
let padded = text.padStart(4,"0");
console.log(padded);

//replace method

let str1 = "helololo";
//let newstr = str1.replaceAll("lo","p");
let newstr = str1.replace(/lo/g,"p");
console.log(newstr);

//make insensitive
let newt = "Please Visit Microsoft!";
let newtext = newt.replace(/MICROSOFT/i,"W3SCHOOL");
console.log(newtext);

//in place of replaceAll we can use regular expression with a '/g' flag for global match.

//split() method is used to convert String into array.

let my = "hello world";
let myarr = my.split('|');
console.log(myarr);

//indexOf()
let texta = "Please locate where 'locate' occurs!";
let index = texta.indexOf("locate");
console.log(index);

let index1 = texta.lastIndexOf("locate");
console.log(index1);

//search

let index2 = texta.search("locate");
console.log(index2);


//match

let bb = "The rain in SPAIN stays mainly in the plain";
let cc = bb.match(/ain/g);
console.log(cc.length);


//matchAll

let textll = "I love cats. Cats are very easy to love. Cats are very popular."
let iterator = textll.matchAll("Cats");
console.log(Array.from(iterator));

//includes

let nn = "Hello world, welcome to the universe.";
let newnn = nn.includes("world");
console.log(newnn);

//startsWith

let checks = "hello my friends";
let res = checks.startsWith("my",6);
console.log(res);

let o = "100";
let k = "2";
console.log(o+k);
console.log(100/"5");

//Nan
let xy = NaN;
let yx = "5";
let z = xy + yx;
console.log(z);

//Hexadecimal

let hex = 0xFF;
console.log(hex);

//Numbers- toString() method
let num = 123;
let numS = num.toString();
numS = numS + 250;
console.log(numS);

//toFixed()

let newNum = 3.144585455;
let result = newNum.toFixed(3);
console.log(result);

console.log(parseInt("-10.33"));
console.log(parseInt("years 10"));//Nan
console.log(parseFloat("10.33 10"));

console.log(Number.isInteger(102));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);







