//Array
//const person = ["John", "Doe", 46];
//console.log(person);
//Object
// const person = {firstName:"John", lastName:"Doe", age:46};
// console.log(person);


//Length Property

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// console.log(length);

//Acessing element in array

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[0];
// console.log(fruit);

//Foreach loop

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";

// function myFunction(value) {
//   text += "<li>" + value + "</li>";
// }
// console.log(text);

//Adding Array element

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Lemon");  // Adds a new element (Lemon) to fruits,we also use lenth property to add

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.push("Kiwi");

//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//let length = fruits.push("Kiwi");


//pop Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.pop());

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.pop();
// console.log(fruits);



// const fruits = ["Banana", "Orange", "Apple"];
// fruits[fruits.length] = "Lemon";  // Adds "Lemon" to fruits
// console.log(fruits);

//Array Shift
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.shift());
// console.log(fruits);
// //shift out
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//let fruit = fruits.shift();

//array unshift

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.unshift("Lemon"));
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.unshift("Lemon"));
// console.log(fruits);

//Associative Array

// const person = [];
// console.log(person[0] = "John");
// console.log(person[1] = "Doe");
// console.log(person[2] = 46);
// console.log( person.length);    // Will return 3
// console.log(person[0]);

//merging Array concatenating array

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

//Splicing and Slicing Arrays

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");
//remove
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(0, 1);
//console.log(fruits);

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);

//for each

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }
// // map array

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//   return value * 2;
// }
// //fillter
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// //reduce
// const numbers = [45, 4, 9, 16, 25];
// let sum = numbers.reduce(myFunction);

// function myFunction(total, value, index, array) {
//   return total + value;
// }