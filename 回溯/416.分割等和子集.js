/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
let memo = {}
var canPartition = function(nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    if (sum% 2 !== 0)
        return false
    
    memo = new Array(nums.length).fill(new Array(sum / 2 + 1).fill(-1))
    return tryPartition(nums, nums.length - 1, sum / 2)
}

function tryPartition(nums, index, sum) {
    if (sum === 0)
        return true
    if (sum < 0 || index < 0)
        return false
    if (memo[index][sum] != -1)
        return memo[index][sum]
    memo[index][sum] = tryPartition(nums, index - 1, sum - nums[index]) || tryPartition(nums, index - 1, sum)
    return memo[index][sum]
}
console.log(canPartition([2,2,1,1]))
// @lc code=end

