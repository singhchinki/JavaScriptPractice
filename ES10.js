//add the flat() method and flatMap() method of Array
//flat()
// var arr1 = [1, 2, [3, 4]];
// arr1.flat(); 
// // [1, 2, 3, 4]
 
// var arr2 = [1, 2, [3, 4, [5, 6]]];
// arr2.flat();
// // [1, 2, 3, 4, [5, 6]]
 
// var arr3 = [1, 2, [3, 4, [5, 6]]];
// arr3.flat(2);
// // [1, 2, 3, 4, 5, 6]
 
// //Using Infinity as the depth, expand the nested array of any depth
// arr3.flat(Infinity); 
// // [1, 2, 3, 4, 5, 6]
 
 
// //Remove null items
// var arr4 = [1, 2, , 4, 5];
// arr4.flat();
//// [1, 2, 4, 5]

//flatMap()
// var arr1 = [1, 2, 3, 4];

// arr1.map(x => [x * 2]); 
// // [[2], [4], [6], [8]]

// console.log(arr1.flatMap(x => [x * 2]));
// // [2, 4, 6, 8]

// // Only "flatten" the array returned by the function in flatMap
// arr1.flatMap(x => [[x * 2]]);
// // [[2], [4], [6], [8]]
