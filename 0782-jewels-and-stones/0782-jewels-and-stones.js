/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let a = stones.split('')
    let x = 0
    for (i = 0; i < a.length; i++) {
        if (jewels.includes(a[i])) {
            x++
        }
    }
    return x
};