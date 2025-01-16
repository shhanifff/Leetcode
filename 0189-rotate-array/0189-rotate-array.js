/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

let n = nums.length;
    
   
    k = k % n;  
    
   
    let part1 = nums.slice(n - k); 
    let part2 = nums.slice(0, n - k);
    
    
    nums.length = 0; 
    nums.push(...part1, ...part2); 
    return nums

};