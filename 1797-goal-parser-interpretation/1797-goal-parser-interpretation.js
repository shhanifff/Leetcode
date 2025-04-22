/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let a=command.split('')
    let str=''
    for(i=0;i<a.length;i++){
        if("G"===a[i]){
            str+="G"
        }else if("(" === a[i]){
            if(a[i+1]===")"){
                str+="o"
            }else{
                str+="al"
            }
        }
    }
    return str
};