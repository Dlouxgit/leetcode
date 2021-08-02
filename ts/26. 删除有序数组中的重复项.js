/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let prev
    for (let i = 0, len = nums.length; i < len; i++) {
        if (prev === undefined) {
            prev = i
        } else if (nums[prev] !== nums[i]){
            nums[++prev] = nums[i]
        }
    }
    return prev + 1
}

console.log(removeDuplicates([1,1,2])) // 2, nums = [1,2]