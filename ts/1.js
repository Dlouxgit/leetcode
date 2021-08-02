/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // k, l
    let k = 0,
        l = nums.length - 1,
        hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (i === l) {
            const nums1 = nums.slice(0, l + 1)
            nums1.sort()
            nums = nums1
            console.log(nums)
            return nums.length
        }
        if (!hash[nums[i]]) 
            hash[nums[i]] = 1
        else if (hash[nums[i]] < 2)
            hash[nums[i]]++
        else {
            swap(nums, i, l)
            l--
            i--
        }
    }
}

function swap(arr, l, r) {
    let tmp = arr[l]
    arr[l] = arr[r]
    arr[r] = tmp
}

var nums = [1,1,1,2,2,3]

console.log(removeDuplicates(nums))
console.log(nums)
