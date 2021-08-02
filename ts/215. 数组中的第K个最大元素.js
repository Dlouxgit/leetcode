/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    return nums.sort((a, b) => a - b)[nums.length - k]
};