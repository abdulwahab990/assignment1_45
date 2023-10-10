"use strict";
/*41. Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array. */
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magicianNames = ["Merlin", "Gandalf", "Houdini", "Dynamo", "Copperfield"];
show_magicians(magicianNames);
//  function show_magicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// const magicianNames: string[] = ["Merlin", "Gandalf", "Houdini", "Dynamo", "Copperfield"];
// show_magicians(magicianNames);
