// Node JS script to manually bundle the index.js script into browser native code.
const fs = require("fs");

// Synchronous approach to read/writing
try {
  // Read dataset of names from json file
  const jsonString = fs.readFileSync(
    "./node_modules/albanian-names-dataset/all_names.json",
    "utf8"
  );

  try {
    // Read index.js file content
    const indexJSFileContent = fs.readFileSync("index.js", "utf8");

    // replace require with the actual dataset list.
    const indexJSFileContentWithDataset = indexJSFileContent.replace(
      `require("albanian-names-dataset/all_names.json")`,
      jsonString
    );

    // replace the module.export with window export for browser native environment compatibility
    let indexJSStringWithoutExport = indexJSFileContentWithDataset.replace(
      "module.exports",
      "window.isAlbanianName"
    );

    // Write the result into index-esm.js - to be used for browser native purposes
    try {
      fs.writeFileSync("index-esm.js", indexJSStringWithoutExport, "utf8");
      console.log("\x1b[32m\u2713\x1b[0m", "Finished bundling to ESM");
    } catch (err) {
      console.error("Error writing to file 'index-esm' :", err);
    }
  } catch (err) {
    console.error("Error reading 'index.js' file:", err);
  }
} catch (err) {
  console.error("Error reading 'all_names.json' file:", err);
}
