/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    let empty = []
    for (i = 0; i < words.length; i++) {
        let b = words[i].split(separator)
        let n = b.map((x) => x.trim('')).filter(Boolean);
        empty.push(n)
    }
    return empty.flat(1)
};