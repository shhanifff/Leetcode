/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let char = s.split('')
    let values = []
    let sum = 0
    for (i = 0; i < char.length; i++) {
        let revPos = 'z'.charCodeAt(0) - char[i].charCodeAt(0) + 1
        let strIndex = i + 1
        values.push(revPos * strIndex)
    }
    return values.reduce((acc, cur) => { return cur + acc }, 0)
};