/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 两次遍历
var sortColors = function(nums) {
    let count = [0, 0, 0]
    for (let i = 0, len = nums.length; i < len; i++) {
        count[nums[i]]++
    }
    for (let i = 0, len = count[0]; i < len; i++) {
        nums[i] = 0
    }
    for (let i = 0, len = count[1]; i < len; i++) {
        nums[i + count[0]] = 1
    }
    for (let i = 0, len = count[2]; i < len; i++) {
        nums[i + count[0] + count[1]] = 2
    }
};

// 一次遍历，类似三路快排
var sortColors = function(nums) {
    let zero = 0 // [0, 1)
    let two = nums.length - 1 // (two, len]
    let i = 0
    while(i <= two ) {
        if (nums[i] === 1) {
            i++
            continue
        }
        else if (nums[i] === 0) {
            swap(nums, i, zero)
            zero++
            if (i < zero)
                i = zero
            continue
        }
        else if (nums[i] === 2) {
            swap(nums, i, two)
            two--
            continue
        }
    }
};
function swap (nums, a, b) {
    const temp = nums[a]
    nums[a] = nums[b]
    nums[b] = temp
}
sortColors([2,0,2,1,1,0])
// @lc code=end

