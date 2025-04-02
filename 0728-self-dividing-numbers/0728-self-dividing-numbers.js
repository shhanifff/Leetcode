/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    let result = [];

    for (let i = left; i <= right; i++) {
        let a = i.toString();

        if (a.includes("0")) {
            continue;
        }

        let b = i.toString().split('');
        let flag = true;

        for (let d of b) {
            if (i % Number(d) !== 0) {
                flag = false;
                break;
            }
        }

        if (flag) result.push(i);
    }

    return result;
};