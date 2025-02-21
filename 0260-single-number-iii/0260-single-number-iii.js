/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let empty=[]
    let a=nums.sort((a,b)=> a-b)
    for(i=0;i<a.length;i++){
        if(a[i]!==a[i+1]&& a [i]!==a[i-1]){
            empty.push(a[i])
        }
    }
    return empty
};