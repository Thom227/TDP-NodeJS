'use strict';

console.log("Hello world!");

// const maths = require("./Maths.js"); //imports everything from ./NAME file
//Then make sur eto ", maths.add(2, 2));
const { add, subtract, multiply, div } = require("./Maths");

console.log("2 + 2 = ", add(2, 2));

console.log("2 - 2 = ", subtract(2, 2));

console.log("2 *  2 = ", multiply(2, 2));

console.log("2 / 2 = ", div(2, 2));

// const getPoke = require("./poke.js") do when want to import functions form poke file

const {startDate} = require('./timeDate');

console.log(startDate);

//CowSay

const {cowTalk} = require('./cow'); //{x} x= exactly which functions you want to
// import from your ./NAME file



console.log(cowTalk("Woof Woof"));

