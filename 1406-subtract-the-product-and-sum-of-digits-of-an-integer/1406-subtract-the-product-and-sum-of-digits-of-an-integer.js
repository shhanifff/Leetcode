/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let nn=n.toString()
    let bb=nn.split('')
    let multiple=1
    let count=0
    
    for(i=0;i<bb.length;i++){
        multiple*=Number(bb[i])
        count+=Number(bb[i])
    }
    return multiple-count
};