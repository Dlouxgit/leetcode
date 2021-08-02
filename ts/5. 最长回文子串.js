/**
 * @param {string} s
 * @return {string}
 */
var integerBreak = function(n) {
    return getMaxSum(n, 1)
};

function getMaxSum(n, sum) {
    if (n === 2) {
        return 1
    }
    let res = sum
    for (let i = 1; i <= n; i++) {
        res = Math.max(res, i * getMaxSum(n - i, sum))
    }
    return res
}

console.log(integerBreak(3))