const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let stringFromValue = String(n);
  let maxVal = 0;

  for (let i = 0; i < stringFromValue.length; i++) {
    const num = parseInt(
      stringFromValue.slice(0, i) + stringFromValue.slice(i + 1),
      10
    );
    console.log(num);
    if (num > maxVal) maxVal = num;
  }
  return maxVal;
}

module.exports = {
  deleteDigit,
};
