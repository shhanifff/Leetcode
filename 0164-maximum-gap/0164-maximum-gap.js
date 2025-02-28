/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
     if (nums.length < 2) {
        return 0;
    }

    
    let uniqueNums = [...new Set(nums)].sort((a, b) => a - b);

    let maxGap = 0;

    
    for (let i = 1; i < uniqueNums.length; i++) {
        let gap = uniqueNums[i] - uniqueNums[i - 1];
        maxGap = Math.max(maxGap, gap);
    }

    return maxGap;
};