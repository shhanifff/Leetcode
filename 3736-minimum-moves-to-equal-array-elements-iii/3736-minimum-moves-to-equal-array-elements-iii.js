/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    const mx = Math.max(...nums)
    let total = 0
    
    for(i=0;i<nums.length;i++){
        total+= mx-nums[i]
    }
    
    return total
};