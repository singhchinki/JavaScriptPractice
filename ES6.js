//Derived variables
// export var name = 'Rainbow'
 
//  var name = 'Rainbow';
// var age = '24';
//  export {name, age};
 
 
// // //Derived constant
// export const sqrt = Math.sqrt;
 
// // //derived function
// export function myModule(someArg) {
//   return someArg;
//  }
//  import {myModule} from 'myModule';//Structure assignment is used
// import {name,age} from 'test';
 
// // //An import statement can import default functions and other variables at the same time.
// import defaultMethod, { otherMethod } from 'xxx.js';

// // Examples of arrow functions
// ()=>1
//  v=>v+1 ;
//  (a,b) =>  a+b ;
//  () => {
//      alert("foo");
//  }
//  e=>{
//      if (e == 0){
//          return 0;
//     }
//      return 1000/e;
//  }
// const test = (a='a',b='b',c='c')=>{
//     return a+b+c
// }
 
// console.log(test('A','B','C')) //ABC
// console.log(test('A','B'))     //ABc
// console.log(test('A'))         //Abc

//Do not use template string:
 
//var name = 'Your name is ' + first + ' ' + last + '.'
 
//Use template string:
 
//var name = `Your name is ${first} ${last}.`

//Structure assignment in array

// var foo = ["one", "two", "three", "four"];
 
// var [one, two, three] = foo;
// console.log(one); // "one"
// console.log(two); // "two"
// console.log(three); // "three"
 
// //If you want to ignore some values, you can get the values you want as follows
// var [first, , , last] = foo;
// console.log(first); // "one"
// console.log(last); // "four"
 
// //You can write like this
// var a, b; //Declare variables first
 
// [a, b] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2

//structure assignment of objects
// const student = {
//   name:'Ming',
//   age:'18',
//   city:'Shanghai'  
// };
 
// const {name,age,city} = student;
// console.log(name); // "Ming"
// console.log(age); // "18"
// console.log(city); // "Shanghai"


//spread operator
//Expand an array or object.

// var arr1 = [0, 1, 2];
// var arr2 = [3, 4, 5];
// var arr3 = [...arr1, ...arr2];// Append all elements in arr2 after arr1 and return
// //Equate to
// var arr4 = arr1.concat(arr2);
 
 
 
// var obj1 = { foo: 'bar', x: 42 };
// var obj2 = { foo: 'baz', y: 13 };
 
// var clonedObj = { ...obj1 };
// console.log(clonedObj);
// // Cloned object: {foo: 'bar', X: 42}
 
// var mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);
// // Merged object: {foo: 'Baz', X: 42, Y: 13}

