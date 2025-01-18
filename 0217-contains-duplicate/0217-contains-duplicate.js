/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let a=nums.sort()
let b=0
for(i=0;i<a.length;i++){
    if(a[i]===a[i+1] || a[i]===a[i-1]){
        a++
    }
}
    if(!a){
        return true
    }else{
        return false
    }
};