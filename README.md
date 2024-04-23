[![Build Status](https://github.com/ndricimrr/is-albanian-name/actions/workflows/run_test.yml/badge.svg)](https://github.com/ndricimrr/is-albanian-name/actions/workflows/run_test.yml)
[![REUSE status](https://api.reuse.software/badge/github.com/ndricimrr/is-albanian-name)](https://api.reuse.software/info/github.com/ndricimrr/is-albanian-name)
[![MIT License](https://img.shields.io/badge/license-MIT-yellow)](https://opensource.org/license/mit)
![NPM Published Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fndricimrr%2Fis-albanian-name%2Fmain%2Fpackage.json&query=%24.version&label=npm)

# is-albanian-name

A small function to check if a given name is albanian

# Instructions

1. Download the pacakge from npm: `npm install is-albanian-name`

2. Import in your project and use on a string

3. Example:

```
import isAlbanianName from 'is-albanian-name';
const testName = "Bardhyl";
const isTrue = isAlbanianName(testName);
console.log(isTrue);
```

# Development / Contributions

Run `npm run test` to check if all is working well.
