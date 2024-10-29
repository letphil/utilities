const fs = require("fs");

/**
 *
 * @param {String} fileName - name of file to be output
 * @param {String} typeName - name you want types to be
 * @param {Object} content - object with types
 * @returns
 */
function writeTypesFile(fileName, typeName, content) {
  return fs.writeFileSync(
    `./out/${fileName}`,
    `type ${typeName} = ` +
      JSON.stringify(content, null, 2).replace(/\"/g, "").replace(/\\/g, "")
  );
}

module.exports = writeTypesFile;
