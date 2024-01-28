"use strict";

var isAlbanianName = require("./");

console.log();

const list = ["Bardhyl", "Elira", "Adelina"];
if (
  isAlbanianName(list[0]) &&
  isAlbanianName(list[1]) &&
  isAlbanianName(list[2])
) {
  console.log("Success: Test Case 1: Generic albanian names");
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
  console.log("Succesfully caught expected thrown error: ", error.message);
}
