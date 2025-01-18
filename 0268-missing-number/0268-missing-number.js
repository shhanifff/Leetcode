/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let number=nums.sort((a,b)=> a-b)
    for(i=0;i<number.length;i++){
        if(i!==number[i]){
            return i
        }
    }
    return number.length
};