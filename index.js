"use strict";

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
// taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var slogans = [
  "Come in and find out",
  "The beautiness company",
  "macht Kinder froh",
  "don't be evil"
];

module.exports = function giveMeSillySlogan(companyName) {
    return companyName + " " + slogans[getRandomInt(0, slogans.length - 1]; 
};

