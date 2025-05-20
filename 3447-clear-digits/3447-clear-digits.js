/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    let a = /\d/.test(s);

    if (!a) {
        return s
    }

    let ss = s.split('')
    for (i = 0; i < ss.length; i++) {
        if (!isNaN(ss[i])) {
            if (isNaN(ss[i - 1])) {
                ss.splice(i - 1, 2)
                i = -1
            }
        }
    }

    return ss.join('')
};