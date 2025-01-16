/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let a=x.toString().split('')
   let b=x.toString().split('').reverse()
   
   for(i=0;i<a.length;i++){
       if(a[i]!==b[i]){
           return false
       }
   }
   return true
};