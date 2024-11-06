const keyExists = require("./key-exists");

test("key exists in object", function () {
  const obj = { a: 1, b: 2, c: 3 };
  const key = "a";
  const expected = 1;
  const result = keyExists(obj, key);
  expect(result).toBe(expected);
});
