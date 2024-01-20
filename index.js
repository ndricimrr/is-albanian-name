// Import file from a npm package instead.
// import ('albanian-names-dataset')
// this should make it easier to maintain this package.
// Code on this file should be super plain simple. The whole idea of making it just a simple exportable Node module is so that it does not require lots of maintaince in the future.

"use strict";

const someNamesTest = [
  {
    name: "Adelina",
    gender: "F",
    origin: "",
  },
  {
    name: "Bardhyl",
    gender: "M",
    origin: "",
  },
  {
    name: "Elira",
    gender: "F",
    origin: "",
  },
  {
    name: "Gentian",
    gender: "M",
    origin: "",
  },
];

const someNamesTestList = ["Adelina", "Bardhyl", "Elira", "Gentian"];

/**
 * A simple function that converts a given word in string format into title case
 * @param {string} string string 1 word to convert
 * @returns a string word converted to title case
 */
function toTitleCase(string) {
  return string.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
}

module.exports = function isAlbanianName(name) {
  if (typeof name === "string") {
    return someNamesTestList.includes(toTitleCase(name));
  }
  throw console.error(
    "Error: Only [string] supported but [" + typeof name + "] given"
  );
};
