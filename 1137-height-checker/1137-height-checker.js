/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
     let exp=heights.toSorted((a,b)=> a-b)
    
    if(exp===heights){
        return 0
    }
    
    let count =0
    for(i=0;i<heights.length;i++){
        if(heights[i]!== exp[i]){
            count++
        }
    }
    
    return count
};