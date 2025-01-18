/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1; 
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += carry; 
        if (digits[i] < 10) {
            carry = 0; 
            break;
        } else {
            digits[i] = 0; 
        }
    }
    if (carry > 0) {
        digits.unshift(carry); 
    }
    return digits;
};