/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
     let numbers=nums
   let result=0
   for(i=0;i<numbers.length;i++){
       let a=numbers[i].toString().split('')
       if(a.length%2==0){
           result++
       }
   }
   
   return result
};