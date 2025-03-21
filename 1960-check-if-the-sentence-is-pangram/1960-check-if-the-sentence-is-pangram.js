/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let small = sentence.toLowerCase();
    let AllLetters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < AllLetters.length; i++) {
        if (!small.includes(AllLetters[i])) {
            return false;
        }
    }
    return true;
};