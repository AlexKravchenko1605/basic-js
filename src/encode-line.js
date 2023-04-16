const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(string) {
  let result = "";
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    count++;
    if (string[i] !== string[i + 1]) {
      result = result + count + string[i];
      count = 0;
    }
  }
  result = result.replace(/1/g, "");

  return result;
}

module.exports = {
  encodeLine,
};
