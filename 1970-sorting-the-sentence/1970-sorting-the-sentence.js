/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
      let num = [];
  let a = s.split(" ");
  for (i = 0; i < a.length; i++) {
    let again = a[i].split("");
    let l = again.length;
    num.push(again[l - 1]);
  }
  let sortNum = num.sort();


  let res = [];
  let sample = 0;
  for (j = 0; j < a.length; j++) {
    for (k = 0; k < a.length; k++) {
      if (a[k].includes(sortNum[sample])) {
        res.push(a[k]);
      }
    }
    sample++;
  }

  let finalWord = "";
  for (let x of res) {
    
    x = x.split("");
    x.pop();
    finalWord += x.join("") + " ";
  }

  return finalWord.trim("");
};