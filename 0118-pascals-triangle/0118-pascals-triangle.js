/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
     let empty = []; 
    for (let i = 0; i < numRows; i++) {
        let row = []
        for (let j = 0; j <= i; j++) {
            let c = 1;
            if (j > 0 && j < i) {
                
                c = empty[i - 1][j - 1] + empty[i - 1][j];
            }
            row.push(c);
        }
        empty.push(row); 
    }
    return empty;
};