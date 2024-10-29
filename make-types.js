const typeGetter = require("./type-getter.js");
const writeTypesFile = require("./write-types-file.js");

/**
 * @param {string} fileName - name of file wanted output
 * @param {string} typeName - name of type wanting to be built
 * @param {object} payload - object to make types for
 * @description - function to output type of object to use in project
 * @returns {string} - stringify'd object with quotes not there
 *
 */
function makeTypes(fileName, typeName, payload) {
  const content = typeGetter(payload);
  writeTypesFile(fileName, typeName, content);
  // return JSON.stringify(content).replace(/\"/g, "");
}

module.exports = makeTypes;
