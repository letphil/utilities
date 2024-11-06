/**
 * @description Get property value from object by dot notation
 * @param {string} propertyName - property name in dot notation
 * @param {object} obj - object to get property from
 * @returns {any} property value
 */
function getPropertyByDotNotation(propertyName, obj) {
  const parts = propertyName.split("."),
    length = parts.length;
  let property = obj;

  for (let i = 0; i < length; i++) {
    property = property[parts[i]];
  }

  return property;
}

module.exports = getPropertyByDotNotation;
