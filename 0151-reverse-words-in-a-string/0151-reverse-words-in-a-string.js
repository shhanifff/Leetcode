/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
     let empty=''
    let b=s.trim('').split(' ')
    for(i=b.length-1;i>=0;i--){
        if(b[i]===""){
            continue;
        }else{
            empty+=b[i]
            if(i!==0){
                empty+=' '
            }

        }
    }
    return empty
};