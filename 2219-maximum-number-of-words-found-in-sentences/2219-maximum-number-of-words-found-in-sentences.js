/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let a=[];
    for(i=0;i<sentences.length;i++){
        let single =sentences[i].split(' ')
        a.push(single.length)
    }
    
    return Math.max(...a)
};