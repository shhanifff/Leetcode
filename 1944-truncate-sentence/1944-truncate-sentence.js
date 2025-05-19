/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let a = s.split(' ')

    let result = ''
    for (i = 0; i < k; i++) {

        result += a[i] + ' '
    }
    return result.trim('')
};