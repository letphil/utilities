//write test for type-getter.js with primitives

const getTypeGetter = require("./type-getter.js");

test("Will return the correct types from the payload object", () => {
  const pl = {
    name: "phil",
    age: 36,
    children: ["caesar", "nick"],
    nationality: "korean",
    skills: {
      coding: 4,
      boxing: 3,
      cooking: 4,
    },
  };

  const expectedOutput = {
    name: "string",
    age: "number",
    children: "string[]",
    nationality: "string",
    skills: {
      coding: "number",
      boxing: "number",
      cooking: "number",
    },
  };

  expect(getTypeGetter(pl)).toEqual(expectedOutput);
});
