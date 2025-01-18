/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr=s.toLowerCase().replace(/[^a-z0-9]/g,"")
    const a= arr.split('')
    if(a.length===1|| a.length===0 ){
        return true
    }else{
        let arr2=[...arr]
         let bb=arr2.reverse().join('')
        if(arr===bb){
            return true
        }else{
            return false
        }  
    }
};