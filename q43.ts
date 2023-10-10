/*Unchanged Magicians: Start with your work from Exercise 40. Call the function
make_great() with a copy of the array of magicians’ names. Because the original
array will be unchanged, return the new array and store it in a separate array. Call
show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name */

function makeGreat(names: string[]): string[] {
    const greatNames: string[] = [];
    for (const name of names) {
        greatNames.push(`Great ${name}`);
    }
    return greatNames;
}

function showmagician(names: string[]): void {
    for (const name of names) {
        console.log(name);
    }
}

const magician: string[] = ["Magician 1", "Magician 2", "Magician 3"];

const greatMagicianNames: string[] = makeGreat([...magician]);
const originalMagician: string[] = [...magician];

console.log("Original Magicians:");
showmagician(originalMagician);

console.log("Great Magicians:");
showmagician(greatMagicianNames);

