/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
 let result = [];
  let map = new Map();

  for (let str of strs) {
    let sortedStr = str.split('').sort().join('');
    
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    map.get(sortedStr).push(str);
  }

  for (let group of map.values()) {
    result.push(group);
  }

  return result;
};