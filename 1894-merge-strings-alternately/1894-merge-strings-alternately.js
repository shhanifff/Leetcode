/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {

    let a = Math.max(word1.length, word2.length)

    let w1 = word1.split('')
    let w2 = word2.split('')

    let res = ''
    for (let i = 0; i < a; i++) {
        if (i < word1.length) {
            res += w1[i]
        }

        if (i < word2.length) {
            res += w2[i]
        }

    }

    return res
};