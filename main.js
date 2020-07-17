const belt = 15.678;    //#0
const boots = 90.2345;
const gloves = 123.965;
// // console.log(belt);
// // console.log(boots);
// // console.log(gloves);
// //-------------------------------------
console.log(Math.max( belt , boots , gloves));  //#1
//-------------------------------------
console.log(Math.min( belt , boots , gloves));  //#2
// //-------------------------------------
let allPrice = belt + boots + gloves;   //#3
console.log(allPrice);
// //-------------------------------------
let clierPrice = Math.floor(belt) + Math.floor(boots) + Math.floor(gloves); //#4
console.log(clierPrice);
// //-------------------------------------
console.log(Math.round((clierPrice)/100)*100);  //#5

console.log(clierPrice % 2 == 0); // #6 Парное число

console.log(500 - (boots + gloves + belt)); //#7

console.log(allPrice.toFixed(2)); //#8

const sale = Math.floor(Math.random() * Math.floor(99));    //#9
console.log(sale);
let z = (allPrice * sale)/100;
let x = (allPrice / 2) - z;
console.log(Math.floor(x));