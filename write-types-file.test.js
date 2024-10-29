const fs = require("fs");

const writeTypesFile = require("./write-types-file.js");

test("it writes file with filename correct", function () {
  writeTypesFile("one.txt", "TestType", { name: "test" });
  const files = fs.readdirSync("./out");
  expect(files.includes("one.txt")).toBe(true);
});
