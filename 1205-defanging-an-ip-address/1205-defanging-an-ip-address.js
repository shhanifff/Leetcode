/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let result=[]
    let a=address.split('')
    for(i=0;i<a.length;i++){
        if(a[i]==="."){
            result.push("[.]")
        }else{
            result.push(a[i])
        }
    }
    return result.join('')
    
};