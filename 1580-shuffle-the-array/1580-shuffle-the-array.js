/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
     let x=[]
    let y=[]
   for(i=0;i<nums.length;i++){
       if(i<n){
          x.push(nums[i]) 
       }else{
           y.push(nums[i])
       }
   }
   
   let final=[]
   for(i=0;i<x.length;i++){
       final.push(x[i],y[i])
   }
   return final
};