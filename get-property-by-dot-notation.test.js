const getPropertyByDotNotation = require("./get-property-by-dot-notation");

test("get property by dot notation", function () {
  const obj = { a: { b: { c: 1 } } };
  const propertyName = "a.b.c";
  const expected = 1;
  const result = getPropertyByDotNotation(propertyName, obj);
  expect(result).toBe(expected);
});
