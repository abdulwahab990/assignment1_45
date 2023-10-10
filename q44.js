"use strict";
/*Sandwiches: Write a function that accepts a array of items a person wants on a
sandwich. The function should have one parameter that collects as many items as
the function call provides, and it should print a summary of the sandwich that is
being ordered. Call the function three times, using a different number of
arguments each time. */
function orderSandwich(...items) {
    console.log("sandwich order summary");
    if (items.length === 0) {
        console.log("you order nothing please select some item for you rsandwich");
    }
    else {
        console.log("items seected:");
        for (const item of items) {
            console.log("-" + item);
        }
        console.log("enjot your sandwich");
    }
    console.log("\n");
}
orderSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
orderSandwich("Ham", "Cheese");
orderSandwich("Tuna", "Onion", "Pickles", "Mustard", "Salt", "Pepper");
