/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     let a=nums.sort((a,b)=> a-b)
    
    for(i=0;i<a.length;i++){
        if(a[i]!==a[i+1] && a[i]!==a[i-1]){
            return a[i]
        }
    }
};