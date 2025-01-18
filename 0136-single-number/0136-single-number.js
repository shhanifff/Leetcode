/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let a=nums.sort()
    for(i=0;i<nums.length;i++){
        if(a[i]!==a[i+1] && a[i]!==a[i-1]){
            return a[i]
        }
    }
    return 0
};