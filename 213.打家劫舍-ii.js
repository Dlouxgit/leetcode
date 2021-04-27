/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 let memo1, memo2
 var rob = function(nums) {
     memo1 = new Array(nums.length).fill(0)
     memo2 = new Array(nums.length).fill(0)
     if (nums.length === 0) {
         return 0
     }
     if (nums.length === 1) {
         return nums[0]
     }
     if (nums.length === 2) {
         return Math.max(nums[0], nums[1])
     }
     return Math.max(tryRob1([...nums].slice(0, -1), 0), tryRob2([...nums].slice(1), 0))
 };
 
 function tryRob1(nums, index) {
     if (index >= nums.length) {
         return 0
     }
     if (memo1[index])
         return memo1[index]
     let res = 0
     for (let i = index; i < nums.length; i++) {
         res = Math.max(res, tryRob1(nums, i + 2) + nums[i])
     }
     memo1[index] = res
     
     return res
 }
 
 function tryRob2(nums, index) {
     if (index >= nums.length) {
         return 0
     }
     if (memo2[index])
         return memo2[index]
     let res = 0
     for (let i = index; i < nums.length; i++) {
         res = Math.max(res, tryRob2(nums, i + 2) + nums[i])
     }
     memo2[index] = res
     
     return res
 }

console.log(rob([1,1,3,6,7,10,7,1,8,5,9,1,4,4,3]))
// @lc code=end

