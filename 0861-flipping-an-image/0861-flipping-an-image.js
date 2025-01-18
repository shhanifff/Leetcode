/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let nums=image
  let result=[]
    for(i=0;i<nums.length;i++){
        let a=nums[i].reverse()
        let inverted =a.map(x=> (x==1 ? 0 : 1))
        result.push(inverted)
    }
    
    return result
      
};