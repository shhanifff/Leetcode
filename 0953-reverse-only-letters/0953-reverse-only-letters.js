/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let letter = []
    for (char of s) {
        if (/[a-zA-Z]/.test(char)) {
            letter.push(char)
        }
    }
    letter.reverse();

    let result = ''
    let index = 0
    for (char of s) {
        if (/[a-zA-Z]/.test(char)) {
            result += letter[index]
            index++
        } else {
            result += char
        }
    }
    return result
};