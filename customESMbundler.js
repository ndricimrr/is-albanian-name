const fs = require("fs");

// Synchronous approach
try {
  const jsonString = fs.readFileSync(
    "./node_modules/albanian-names-dataset/all_names.json",
    "utf8"
  );

  //   const modifiedJson = jsonString.replace(/\n/g, "");

  try {
    const indexJSString = fs.readFileSync("index.js", "utf8");

    const indexJSStringWithJSON = indexJSString.replace(
      `require("albanian-names-dataset/all_names.json")`,
      jsonString
    );

    let indexJSStringWithoutExport = indexJSStringWithJSON.replace(
      "module.exports",
      "window.isAlbanianName"
    );

    try {
      fs.writeFileSync("index-esm.js", indexJSStringWithoutExport, "utf8");
    } catch (err) {
      console.error("Error writing to file:", err);
    }
  } catch (err) {
    console.error("Error reading file:", err);
  }
} catch (err) {
  console.error("Error reading file:", err);
}
