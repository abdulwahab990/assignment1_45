"use strict";
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to
// 10. If you want to try more comparisons, write more tests. Have at least one True
// and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater
// than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
const str1 = "hello";
const str2 = "hello";
console.log(str1 === str2);
console.log(str1 !== str2);
// • Tests using the lower case function
const txt1 = "Hello abdul wahab";
const txt2 = "Hello abdul wahab";
console.log(txt1.toLowerCase() == txt2);
/*• Numerical tests involving equality and inequality, greater than and less than, greater
 than or equal to, and less than or equal to */
const num1 = 5;
const num2 = 10;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z);
console.log(x < y || y > z);
// • Test whether an item is in a array
const fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits.includes('Banana')); // true
console.log(fruits.includes('Kiwi')); // false
// • Test whether an item is not in a array
const colors = ["Purple", "Black", "Brown", "Yellow"];
console.log(!colors.includes('voilet'));
console.log(!colors.includes('green'));
