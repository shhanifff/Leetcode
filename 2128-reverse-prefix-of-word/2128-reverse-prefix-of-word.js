/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    if (word.includes(ch)) {
        let chIndex = word.indexOf(ch)

        let first = word.slice(0, chIndex + 1).split('').reverse().join('')
        let seconde = word.slice(chIndex + 1)
        return first + seconde

    }
    return word
};