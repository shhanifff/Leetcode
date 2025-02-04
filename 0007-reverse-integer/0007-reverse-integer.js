/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let empty = ''
    if (x < 0) {
        empty += '-'
    }

    let sp = x.toString().split('').reverse()

    for (i = 0; i < sp.length; i++) {
        if (sp[i] === "-" ||( sp[i] === "0" && empty.length==0)) {
            continue;
        } else {
            empty += sp[i]
        }
    }

    let result =Number(empty)

     if (result < -2147483648 || result > 2147483647) {
        return 0;
    }

    return result
};