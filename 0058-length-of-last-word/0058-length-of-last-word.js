/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let a=s.trim('').split(' ').pop('')
    return a.length
};