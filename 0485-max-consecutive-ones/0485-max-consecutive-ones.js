/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let a = [];
    let bb = [];


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            a.push(1);
        } else {
            if (a.length > 0) {
                bb.push(a);
                a = [];
            }
        }
    }


    if (a.length > 0) {
        bb.push(a);
    }

    let count = [];


    for (let i = 0; i < bb.length; i++) {
        let c = bb[i];
        let aa = 0;
        for (let j = 0; j < c.length; j++) {
            aa++;
        }
        count.push(aa);
    }


    if (count.length === 0) {
        return 0;
    }


    return Math.max(...count);


};