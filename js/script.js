// use modern scripting
"use strict";

// declare two variables and initialize one with a value. Copy that value into the other variable and display it to the user.

/*
let admin, name;
name = "John";
admin = name;
alert(`${admin} ${1+2}`);
*/

// create a vairable to store the name of our planet.
// create a variable to store the name of the current site visitor

/*
let ourPlanetName = "Earth";
let currentVisitor = "John";

let name = prompt("What is your name?", "");
alert(`Welcome ${name}!`);
*/

let question = prompt("What is the official name of JavaScript?", "")

if(question == "ECMAScript") {
  alert("Right!");
} else {
  alert("Didn't know? ECMAScript!");
}
