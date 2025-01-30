/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const uniqueNumbers = [...new Set(nums)];
    let aa = uniqueNumbers.sort((a,b)=> a-b)

    if (aa.length == 1) {
        return aa[0]
    }

    if (aa.length === 2) {
        return aa[aa.length - 1]
    }

    return aa[aa.length - 3]

};