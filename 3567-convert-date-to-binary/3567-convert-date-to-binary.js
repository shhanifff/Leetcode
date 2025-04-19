/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    let a = date.split('-')
    let values = []
    for (i = 0; i < a.length; i++) {
        let num = parseInt(a[i])
        let b = num.toString(2)
        values.push(b)
    }
    return values.join('-')
};