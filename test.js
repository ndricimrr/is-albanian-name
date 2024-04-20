"use strict";

var isAlbanianName = require("./").default;

const list = ["Bardhyl", "Elira", "Adelina"];
if (
  isAlbanianName(list[0]) &&
  isAlbanianName(list[1]) &&
  isAlbanianName(list[2])
) {
  console.log(
    "\x1b[32m\u2713\x1b[0m",
    "Test Case 1: Generic albanian names:",
    list[0],
    list[1],
    list[2]
  );
} else {
  console.error(
    "FAIL: ",
    list[0] +
      ", " +
      list[1] +
      ", " +
      list[2] +
      " should be on the list but not found"
  );
  process.exit(1);
}

try {
  isAlbanianName(2511);
  console.error("ERROR: Numbers not accepted as input");
  process.exit(1);
} catch (error) {
  console.log(
    "\x1b[32m\u2713\x1b[0m",
    "Test Case 2: Succesfully caught expected thrown error => ",
    error.message
  );
}
