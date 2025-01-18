/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let uniqueNumbers = nums.sort((a, b) => a - b); 
  let a=uniqueNumbers.length-k

  return uniqueNumbers[a]
};