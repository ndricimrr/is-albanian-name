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

module.exports = function isAlbanianName(name) {
  return someNamesTestList.includes(name);
};
