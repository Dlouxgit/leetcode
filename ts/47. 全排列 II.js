/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let res = []
let isUsed
var permuteUnique = function(nums) {
    res = []
    isUsed = new Array(nums.length).fill([])
    if (nums.length === 0)
        return res
    const arr = []
    generatorPermute(nums, 0, arr)
    return res
}

function generatorPermute(nums, index, arr) {
    if (index === nums.length) {
        return res.push([...arr])
    }
    for (let i = 0, len = nums.length; i < len; i++) {
        console.log(isUsed)
        console.log(i,'i')
        console.log(isUsed[nums[i]])
        if (!isUsed[nums[i]].includes(index)) {
            isUsed[nums[i]].push(index)
            arr.push(nums[i])
            console.log('i', i, 'nums[i]', nums[i])
            generatorPermute(nums, index + 1, arr)
            isUsed[nums[i]] = false
            arr.pop()
        }
        
    }
}

permuteUnique([1,2,3])
console.log(res)