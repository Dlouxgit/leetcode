/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let res = []
let isUsed
var permute = function(nums) {
    isUsed = new Array(nums.length).fill(false)
    res = []
    if (nums.length === 0)
        return res
    generatorPermute(nums, 0, [])
    console.log('res', res)
    return res
}
function generatorPermute(nums, index, arr) {
    if (nums.length === index) {
        console.log(res)
        return res.push([...arr])
    }
    for (let i = 0, len = nums.length; i < len; i++) {
        if (!isUsed[nums[i]]) {
            isUsed[nums[i]] = true
            arr.push(nums[i])
            console.log('arr', arr)
            generatorPermute(nums, index + 1, arr)
            isUsed[nums[i]] = false
            arr.pop()
        }
    }
}

permute([1,2,3])
console.log(res)