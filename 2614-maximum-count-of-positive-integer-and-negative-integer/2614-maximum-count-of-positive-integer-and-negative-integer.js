/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let negative=0 , positive=0
    for(x of nums){
        positive += x >0
        negative+= x < 0
    }

    return Math.max(negative, positive)
};