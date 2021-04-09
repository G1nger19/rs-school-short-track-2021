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
  const arr = [];
  const arr1 = (`${n}`).split('');
  for (let i = 0; i < arr1.length; i++) {
    arr.push(
      +arr1
        .slice(0, i)
        .concat(arr1.slice(i + 1, arr1.length))
        .join(''),
    );
  }
  return Math.max(...arr);
}

module.exports = deleteDigit;
