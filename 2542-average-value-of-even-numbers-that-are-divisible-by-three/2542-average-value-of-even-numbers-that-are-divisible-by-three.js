/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    const filtered = nums.filter((num) => num % 2 === 0 && num % 3 === 0);

  
  if (filtered.length === 0) {
    return 0;
  }

  
  const sum = filtered.reduce((acc, num) => acc + num, 0);

 
  return Math.floor(sum / filtered.length)
};