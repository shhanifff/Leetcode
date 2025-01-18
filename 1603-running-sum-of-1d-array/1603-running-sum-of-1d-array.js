/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    
  let final = [];
  let a = 0;
  for (i = 0; i < nums.length; i++) {
    if (i == 0) {
      final.push(nums[i]);
    } else {
      let ans = final[a] + nums[i];
      final.push(ans);
      a++;
    }
  }
  return final;
};