/**
 * @param {number[]} nums
 * @return {boolean}
 */
let memo = []
var canPartition = function(nums) {
    const len = nums.length
    if (len <= 1)
        return falase

    let sum = 0
    for (let i = 0; i < len; i++) {
        sum += nums[i]
    }
    memo = []

    if (sum % 2 !== 0)
        return false
    return tryPartition(nums, sum, len - 1)
}

// 在 nums 的 [0, n] 中找到 合为 c 的
function tryPartition(nums, c, n) {
    if (c < 0) {
        memo[n] = 2
        return false
    }
    if (c === 0) {
        memo[n] = 1
        return true
    }
    if (memo[n] === 1) {
        return true
    } else if (memo[n] === 2) {
        return false
    }
    let res
    for (let i = 0; i < nums.length; i++) {
        res = tryPartition(nums, c, n - 1) 
            || tryPartition(nums, c - nums[i], n - 1)
    }
    memo[n] = res === true ? 1 : 2
    return res
}

console.log(canPartition([1,5,11,5]))