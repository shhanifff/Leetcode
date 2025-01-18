/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
     let one=[]
    let two=[]
    let ans=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            one.push(nums[i])
        }else{
            two.push(nums[i])
        }
    }
    
    return ans=[...one,...two]
};