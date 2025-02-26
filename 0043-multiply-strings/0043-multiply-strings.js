/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let NUM1 = BigInt(num1);
    let NUM2 = BigInt(num2);
    let result = NUM1 * NUM2;
    return result.toString();
};