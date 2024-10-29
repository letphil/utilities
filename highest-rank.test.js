const highestRank = require("./highest-rank.js");

test("simple test", () => {
  const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
  expect(highestRank(arr)).toBe(12);
});

test("tie with occurences returns larger number", () => {
  const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];
  expect(highestRank(arr)).toBe(12);
});
