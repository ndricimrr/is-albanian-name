"use strict";

var isAlbanianName = require("./");

console.log();

if (isAlbanianName("Bardhyl")) {
  console.log("SUCCESS");
}

if (isAlbanianName("Elira")) {
  console.log("SUCCESS");
}

if (isAlbanianName("Adelina")) {
  console.log("SUCCESS");
}

if (isAlbanianName("John")) {
  console.error("ERROR: JOHN is not an Albanian Name.");
}

try {
  isAlbanianName(2511);
} catch (error) {
  console.log("SUCCESS CATCH ERROR: NUMBER GIVEN");
}
