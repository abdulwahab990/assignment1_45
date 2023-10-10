"use strict";
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function
make_great() with a copy of the array of magicians’ names. Because the original
array will be unchanged, return the new array and store it in a separate array. Call
show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name */
function makeGreat(names) {
    const greatNames = [];
    for (const name of names) {
        greatNames.push(`Great ${name}`);
    }
    return greatNames;
}
function showmagician(names) {
    for (const name of names) {
        console.log(name);
    }
}
const magician = ["Magician 1", "Magician 2", "Magician 3"];
const greatMagicianNames = makeGreat([...magician]);
const originalMagician = [...magician];
console.log("Original Magicians:");
showmagician(originalMagician);
console.log("Great Magicians:");
showmagician(greatMagicianNames);
