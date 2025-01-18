/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let sum = []
    let b = 0


    for (i = 0; i < accounts.length; i++) {
        let a = accounts[i]
        for (j = 0; j < a.length; j++) {
            b += a[j]
        }
        sum.push(b)
        b = 0
    }

    let ans = Math.max(...sum)
    return ans
};