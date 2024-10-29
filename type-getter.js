// https://jestjs.io/docs/getting-started
// Go over this
/**
 *
 * @param {Object} payload - object
 * @returns {Object} - object with keys as types
 */
function typeGetter(payload) {
  let types = {};

  for (const key in payload) {
    // to - typeof
    const to = typeof payload[key];

    if (to === "object") {
      if (Array.isArray(payload[key])) {
        if (typeof payload[key][0] === "object") {
          const arrObjTypes = typeGetter(payload[key][0]);
          types[key] = JSON.stringify(arrObjTypes) + "[]";
        } else {
          types[key] = `${typeof payload[key][0]}[]`;
        }
      } else {
        const objTypes = typeGetter(payload[key]);
        types[key] = objTypes;
      }
    } else {
      types[key] = to; // string, number, boolean
    }
  }

  return types;
}

module.exports = typeGetter;
