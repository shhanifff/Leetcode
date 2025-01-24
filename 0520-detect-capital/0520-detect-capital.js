/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  let a=word.split('')
    let capital=0;
    let small=0
    for(i=0;i<a.length;i++){
        let c=a[i].toUpperCase()
        let s=a[i].toLowerCase()
        if(c===a[i]){
            capital++
        }else{
            small++
        }
    }
    
    if(capital ===a.length){
        return true
    }
    if(small===a.length){
        return true
    }
    
    if(a[0]===a[0].toUpperCase() && small===a.length-1 ){
        return true
    }
    return false
};