/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let a=Math.max(...nums)
    let current =0
    let orr=0
    
    for(i=0;i<nums.length;i++){
        if(a===nums[i]){
            current++
        }else{
            orr++
        }
    }
    
    if(orr<current){
        return a
    }else{
        let freqMap = {};
        let maxFreq = 0;
        let mostFrequent = nums[0];

        for (let num of nums) {
            freqMap[num] = (freqMap[num] || 0) + 1;
            if (freqMap[num] > maxFreq) {
                maxFreq = freqMap[num];
                mostFrequent = num;
            }
        }
        return mostFrequent
    }
};