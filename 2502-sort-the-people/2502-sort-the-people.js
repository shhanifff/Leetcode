/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let n = names
    let a = heights
    let aa = []
    for (i = 0; i < n.length; i++) {
        aa.push({ name: n[i], height: a[i] });
    }
    aa.sort((a, b) => b.height - a.height)

    return aa.map((a) => a.name)
};