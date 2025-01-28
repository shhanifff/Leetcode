/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
      let first = words[0].split('');
    let empty = [];

    for (let i = 0; i < first.length; i++) {
        let A = 0;

        for (let j = 0; j < words.length; j++) {
            if (words[j].includes(first[i])) {
                A++;
                words[j] = words[j].replace(first[i], ''); 
            }
        }

        if (A === words.length) {
            empty.push(first[i]); 
        }
    }

    return empty;
};