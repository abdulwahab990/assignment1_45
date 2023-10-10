"use strict";
/*42. Great Magicians: Start with a copy of your program from Exercise 39. Write a
function called make_great() that modifies the array of magicians by adding the
phrase the Great to each magician’s name. Call show_magicians() to see that the
list has actually been modified. */
function make_great(names) {
    const greatNames = [];
    for (const name of names) {
        greatNames.push(`Great ${name}`);
    }
    return greatNames;
}
function showmagicians(names) {
    for (const name of names) {
        console.log(name);
    }
}
const magicians = ["Magician 1", "Magician 2", "Magician 3"];
const greatMagicians = make_great([...magicians]);
const originalMagicians = [...magicians];
console.log("Original Magicians:");
showmagicians(originalMagicians);
console.log("Great Magicians:");
showmagicians(greatMagicians);
