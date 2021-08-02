// 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。

 
// 暴力 n2
// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
//                 console.log(i, j)
//                 return true
//             }
//         }
//     }
//     return false
// };

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let l = 0,
        r = 0,
        hash = {}
    
    while (r < nums.length) {
        console.log(hash)
        console.log(l)
        console.log(r)
        if (hash[nums[r]] === undefined) {
            hash[nums[r]] = r
        } else {
            return true
        }
        r++
        if (r - l > k) {
            hash[nums[l]] = undefined
            l++
        }
    }
    return false
};

var nums1 = [1,2,3,1], k1 = 3 // true
var nums2 = [1,0,1,1], k2 = 1 // true
var nums3 = [1,2,3,1,2,3], k3 = 2 // false
console.log(containsNearbyDuplicate(nums1, k1))
