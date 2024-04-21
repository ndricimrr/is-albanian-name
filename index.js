"use strict";

/*
 * SPDX-FileCopyrightText: 2024 Ndricim Rrapi <ndricimrr@gmail.com>
 *
 * SPDX-License-Identifier: MIT
 */

const list = require("albanian-names-dataset/all_names.json");

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
    return list.includes(toTitleCase(name));
  }
  throw new Error(
    "Error: Only [string] supported but [" + typeof name + "] given"
  );
};
