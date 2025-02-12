/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let a=nums.sort()
    let res=[]
    for(i=0;i<a.length;i++){
        if(a[i] === a[i + 1] && !res.includes(a[i])){
            res.push(a[i])
        }
    }
    return res
};