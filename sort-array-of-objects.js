const getPropertyByDotNotation = require("./get-property-by-dot-notation.js");

// key has to be number or datetime
/**
 *
 * @param {array} arr array of objects
 * @param {string} key key to sort by (can be in dot notation)
 * @param {ASC | DESC} order order to sort by
 * @returns {array} sorted array
 */
function sortArrayOfObjects(arr, key, order) {
  // if key is nested in object
  if (key.includes(".")) {
    return arr.sort((a, b) => {
      if (order === "ASC") {
        return (
          getPropertyByDotNotation(key, a) - getPropertyByDotNotation(key, b)
        );
      }
      return (
        getPropertyByDotNotation(key, b) - getPropertyByDotNotation(key, a)
      );
    });
  }

  // if key is not nested in object
  return arr.sort((a, b) => {
    if (order === "ASC") {
      return a[key] - b[key];
    }
    return b[key] - a[key];
  });
}

// const arr = [
//   {
//     name: "a",
//     skills: {
//       javascript: 10,
//       python: 8,
//     },
//   },
//   {
//     name: "b",
//     skills: {
//       javascript: 7,
//       python: 8,
//     },
//   },
//   {
//     name: "c",
//     skills: {
//       javascript: 6,
//       python: 8,
//     },
//   },
// ];
// console.log(sortArrayOfObjects(arr, "skills.javascript", "D"));
