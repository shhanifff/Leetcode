/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
     let ss = s.split(''); 
    let tt = t.split('');

    for (let i = 0; i < tt.length; i++) { 
        let index = ss.indexOf(tt[i]); 
        if (index !== -1) {
            ss.splice(index, 1); 
        } else {
            return tt[i]; 
        }
    }
    return null;
};