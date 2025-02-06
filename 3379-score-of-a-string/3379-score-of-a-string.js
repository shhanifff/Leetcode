/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
     let act = [];
    for (let i = 0; i < s.length; i++) {
        act.push(s.charCodeAt(i));
    }

    let value = [];
    for (let j = 0; j < act.length - 1; j++) { 
        let a = act[j] - act[j + 1];
        value.push(Math.abs(a));
    }

    let sum = 0;
    for (let k = 0; k < value.length; k++) {
        sum += value[k];
    }
    return sum;
};