function keyExists(obj, key) {
  if (!obj || (typeof obj !== "object" && !Array.isArray(obj))) {
    return false;
  } else if (key in obj) {
    return obj[key];
  } else if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      const result = keyExists(obj[i], key);
      if (result) {
        return result;
      }
    }
  } else {
    for (const k in obj) {
      const result = keyExists(obj[k], key);
      if (result) {
        return result;
      }
    }
  }

  return false;
}

module.exports = keyExists;
