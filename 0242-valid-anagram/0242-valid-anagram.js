/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let tt=true
    let ff=false
    let sortedS=s.split('').sort().join('')
    let sortedT=t.split('').sort().join('')
    if(sortedS===sortedT){
        return tt
    }else{
        return ff
    }
};