// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing
// each person’s name, print a message to them. The text of each message should
// be the same, but each message should be personalized with the person’s name.
let nameOfStudents:string[] = ["abdul wahab", "hamza", "hassan", "mudassir", "ameen", "atif"];

for (let  name of nameOfStudents) {
    console.log(`Hello how are you ,  ${name.toLocaleUpperCase()}!`);}
