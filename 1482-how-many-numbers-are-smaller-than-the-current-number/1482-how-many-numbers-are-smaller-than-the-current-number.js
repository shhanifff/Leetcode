/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let ans=[]
    let a=0
    
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            if(nums[j]<nums[i]){
                a++
            }
        }
        ans.push(a)
        a=0
    }
    
    return ans
};