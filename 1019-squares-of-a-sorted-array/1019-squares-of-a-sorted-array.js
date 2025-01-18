/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let ans=[]
    for(i=0;i<nums.length;i++){
        let a=nums[i]*nums[i]
        ans.push(a)
    }
    return ans.sort((a,b)=> a-b)
};