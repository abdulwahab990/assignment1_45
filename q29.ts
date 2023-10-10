/*29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of
independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your
array. If the fruit is in your array, the if block should print a statement, such as You really
like bananas!*/ 

let favorite_fruits:string [] = ["Mango", "Peach", "Grapes", "Apple", "Watermelon"];

// if statement for apple
console.log("if statement for apples:")
if(favorite_fruits.includes("Apple")){
    console.log("Oh! You really like Apples")
}

// if statement for peach
console.log("if statement for Peach:")
if(favorite_fruits.includes("Peach")){
    console.log("Oh! You really like Peaches")
}

// if statement for grapes
console.log("if statement for Grapes:")
if(favorite_fruits.includes("Grapes")){
    console.log("Oh! You really like Grapes")
}

// if statement for watermelon
console.log("if statement for Watermelon:")
if(favorite_fruits.includes("Watermelon")){
    console.log("Oh! You really like Watermelon")
}

// if statement for mangoes
console.log("if statement for Mangoes:")
if(favorite_fruits.includes("Mango")){
    console.log("Oh! You really like Mangoes")
}

