/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positive=[]
    let negative=[]
    
    for(i=0;i<nums.length;i++){
        if(nums[i]<0){
            negative.push(nums[i])
        }else{
            positive.push(nums[i])
        }
    }
    
    let res=[]
    
    for(i=0;i<positive.length;i++){
        res.push(positive[i],negative[i])
    }
    return res 
};