/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    if (s.length !== goal.length) {
        return false
    }
    let a = s + s

    if (a.includes(goal)) {
        return true
    }
    return false
};