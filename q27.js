"use strict";
/* 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
 • If the alien is green, print a message that the player earned 5 points.
 • If the alien is yellow, print a message that the player earned 10 points.
 • If the alien is red, print a message that the player earned 15 points.
 • Write three versions of this program, making sure each message is printed for the
 appropriate color alien.*/
console.log("first version where alien color is green");
let aliens_colors = "green";
if (aliens_colors == "green") {
    console.log("the player earned 5 points");
}
else if (aliens_colors == "yellow") {
    console.log("the player earned 10 points");
}
else if (aliens_colors == "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("the alien is unknown color");
}
console.log("2nd version where alien color is yellow");
aliens_colors = "yelloe";
if (aliens_colors == "green") {
    console.log("the player earned 5 points");
}
else if (aliens_colors == "yellow") {
    console.log("the player earned 10 points");
}
else if (aliens_colors == "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("the alien is unknown color");
}
console.log("3rd version where alien color is red");
aliens_colors = "red";
if (aliens_colors == "green") {
    console.log("the player earned 5 points");
}
else if (aliens_colors == "yellow") {
    console.log("the player earned 10 points");
}
else if (aliens_colors == "red") {
    console.log("the player earned 15 points");
}
else {
    console.log("the alien is unknown color");
}
