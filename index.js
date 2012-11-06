
/**
 * Take N elements from array.
 *
 * the method accepts a number or
 * a function, if a number is provided
 * a function will be created for you.
 *
 * example:
 *
 *        take([1, 2, 3], 2);
 *        // > [1, 2]
 *        take([1, 2, 3], function (i, el) {
 *          return el < 3;
 *        });
 *        // > [1, 2]
 *
 * @param {Array} arr
 * @param {Number|Function} fn
 * @return {Array}
 */

module.exports = function (arr, n) {
  var len = arr.length
    , ret = []
    , fn = n;

  // wrap fn
  if ('function' != typeof fn) {
    fn = function (i) {
      return n > i;
    };
  }

  // filter
  for (var i = 0; i < len; ++i) {
    if (fn(i, arr[i])) ret.push(arr[i]);
  }

  return ret;
};
