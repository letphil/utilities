/**
 * @description Check if key exists in object and give back value if exists and false if not
 * @param {object} obj - object to check for key
 * @param {string} key - key to check for in object
 * @returns {any | false} value of key if it exists, false otherwise
 */
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
