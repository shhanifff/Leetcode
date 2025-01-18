/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let number = arr.sort();
  let empty = [];

  for (let a = 0; a < number.length; ) {
    let count = 0;

    for (let i = a; i < number.length; i++) {
      if (number[a] === number[i]) {
        count++;
      } else {
        break;
      }
    }

    empty.push(count);
    a += count;
  }

  for (let i = 0; i < empty.length; i++) {
    for (let j = i + 1; j < empty.length; j++) {
      if (empty[i] === empty[j]) {
        return false; 
      }
    }
  }
  return true;
};