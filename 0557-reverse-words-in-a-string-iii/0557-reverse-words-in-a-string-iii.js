/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
     let a=s.split(' ')
    let result=''
    for(i=0;i<a.length;i++){
        let z=a[i].split('').reverse().join('')+' '
        // return z
        result+=z 
    }
    return result.trim()
};