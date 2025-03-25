/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
    let nums = []
    for (i = 1; i <= n; i++) {
        nums.push(i)
    }

    let result = []
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 3 === 0 || nums[i] % 5 === 0 || nums[i] % 7 === 0) {
            result.push(nums[i])
        }
    }

    return result.reduce((acc, cur) => { return acc + cur }, 0)
};