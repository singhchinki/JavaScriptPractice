// How to use Funtion in JavaScript
// function Add(a, b) 
// {
//     var a  = 10;
//     var b = 20;
//     let add = a + b;
//    console.log(add);
//    // return add;
// }
// Add();

// function outSideTheFunction(name)
// {
//     console.log('Good Morning', name)
// }
// outSideTheFunction('smita')

//anonymous function
//  var abc =function (p1,p2) {
//     console.log(p1 + p2)
//  };
//  abc(5,6);

//Arrow Function
// let greet = x => console.log(x);
// greet('Arrow Expression');
//Multiple Arrow Function
// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// let result1 = sum(5,7);
// console.log(result1);

// Synchronusly
//var sychVsAsych
// var sychVsAsych

// console.log('Hi!');
// console.log('Good Morning');
// console.log('How are you?');

// console.log('hi');
// setTimeout[() => {
//     console.log('hello');
// }, 5000];

// console.log('I am good');
 

// console.log('hi');
// setTimeout[() => {
//     console.log('hello');
// }, 5000];

// console.log('I am good');

// hosting variable with var, let, const
// program to display value
// var a = 4;

// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     var b;
// }

// greet(); // hello
// console.log(b);

// program to print the text
// greet();

// let greet = function() {
//     console.log('Hi, there.');
// }

//  program that shows the delay in execution

function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet, 2000);
sayName('John');