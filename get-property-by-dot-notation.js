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
