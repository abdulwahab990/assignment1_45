// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing
// each test and your prediction for the results of each test. Your code should look
// something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to
// True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests
// evaluate to False.


let car: string = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car.length > 5? I predict False.");
console.log(car.length > 9);

console.log("Is car.length >= 6? I predict True.");
console.log(car.length >= 6);

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car.toUpperCase() == 'SUBARU'? I predict False.");
console.log(car.toUpperCase() == 'suabru');

console.log("Is car.charAt(0) == 's'? I predict True.");
console.log(car.charAt(0) == 's');

console.log("Is car.includes('aru')? I predict True.");
console.log(car.includes('aru'));

console.log("Is car.endsWith('ru')? I predict True.");
console.log(car.endsWith('ru'));

console.log("Is car.indexOf('b') >= 0? I predict False.");
console.log(car.indexOf('b') >= 6);





