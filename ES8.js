//async/await//
//   async function init() {
//     console.log('start')
//     await this.testSync()
//     console.log('End')
//   }
//   this.init()
//   async function testSync() {
//     const response = await new Promise(resolve => {
//       setTimeout(() => {
//           resolve("async await test...");
//         }, 1000);
//     });
//     console.log(response);
//   }

//Object.keys()
//var obj = { foo: "bar", baz: 42 };
//console.log (Object.keys(obj));
//console.log(obj);
// ["foo", "baz"]

//Object.values()
//var obj = { foo: "bar", baz: 42 };
//console.log (Object.values(obj));
// ["bar", 42]

//Object.entries()
//The Object.entries method returns an array of key value pairs of all enumerable properties of the parameter object itself (excluding inheritance).

//var obj = { foo: 'bar', baz: 42 };
//Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]


// const obj1 = {a: 1, b: 2, c: 3}
// for(let [key,value] of Object.entries(obj1)){
//     console.log(`key: ${key} value:${value}`)
// }

//One use of the Object.entries method is to turn an object into a real Map structure.

//var obj = { foo: 'bar', baz: 42 };
//var map = new Map(Object.entries(obj));
//console.log(map); // Map { foo: "bar", baz: 42 }

//Object.getOwnPropertyDescriptors()
// const obj = {
//     foo: 123,
//     get bar()
//      { return 'abc' }
//   };
   
//   Object.getOwnPropertyDescriptors(obj)
//   console.log(obj);
////  { foo:
////    { value: 123,
////      writable: true,
////    enumerable: true,
////   configurable: true },
// //  bar:
// // { get: [Function: bar],
// //   set: undefined,
//// enumerable: true,
//// configurable: true } }

