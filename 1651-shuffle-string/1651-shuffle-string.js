/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let a = s.split('')

    let empty = []
    for (i = 0; i < a.length; i++) {
        empty.push({ v: a[i], n: indices[i] })
    }
    let nn = empty.sort((a, b) => a.n - b.n)

    let string = ""
    for (i = 0; i < a.length; i++) {
        string += nn[i].v
    }
    return string
};