/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    let a = 0
    for (x in obj) {
        a++
    }
    return a ? false : true
};