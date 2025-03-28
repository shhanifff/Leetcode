/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    let a = nums.sort((a, b) => a - b)
    let result = []
    for (i = 0; i < a.length; i++) {
        if (a[i] == a[i + 1]) {
            result.push(a[i])
        }
    }
    return result
};