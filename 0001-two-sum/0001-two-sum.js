/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     let res=[]
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            let chk=nums[i]+nums[j]
            
            if(chk==target){
                res.push(i,j)
                return res
            }
        }
    }
};