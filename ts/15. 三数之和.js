/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b)
//     let l, r
//     const set = new Set()
//     const res = []
//     for(let i = 0, len = nums.length; i < len; i++) {
//         const tmp = nums[i]
//         l = i + 1
//         r = len - 1
//         while (l < r && l < len) {
//             const sum = nums[l] + nums[r]
//             if (sum === -tmp) {
//                 if (!set.has(`[${tmp}, ${nums[l]}, ${nums[r]}]`)) {
//                     res.push([tmp, nums[l], nums[r]])
//                 }
//                 set.add(`[${tmp}, ${nums[l]}, ${nums[r]}]`)
//                 l++
//                 r--
//             } else if (sum < -tmp) {
//                 l++
//             } else {
//                 r--
//             }
//         }
//     }
//     return res
// };

// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b)
//     let l, r
//     // const set = new Set()
//     const res = []
//     let tmpL
//     let tmpR
//     let tmpI
//     for(let i = 0, len = nums.length; i < len; i++) {
//         if (tmpI === nums[i]) {
//             continue
//         }
//         const tmp = nums[i]
//         l = i + 1
//         r = len - 1
//         tmpL = undefined
//         tmpR = undefined
//         while (l < r && l < len) {
//             if (nums[l] === tmpL) {
//                 console.log('l, nums[l]', l, nums[l]);
//                 l++
//                 continue
//             }
//             if (nums[r] === tmpR) {
//                 console.log('r, nums[r]', r, nums[r]);
//                 r--
//                 continue
//             }
//             const sum = nums[l] + nums[r]
//             if (sum === -tmp) {
//                 // if (!set.has(`[${tmp}, ${nums[l]}, ${nums[r]}]`)) {
//                     res.push([tmp, nums[l], nums[r]])
//                 // }
//                 // set.add(`[${tmp}, ${nums[l]}, ${nums[r]}]`)
//                 tmpL = nums[l]
//                 tmpR = nums[r]
//                 l++
//                 r--
//             } else if (sum < -tmp) {
//                 tmpL = nums[l]
//                 l++
//             } else {
//                 tmpR = nums[r]
//                 r--
//             }
//         }
//         tmpI = nums[i]
//     }
//     return res
// };

var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    for(let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] > 0) {
            return res
        }
        // if (i > 0 && nums[i] === nums[i - 1]) continue
        let l = i + 1
        let r = len - 1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum === 0) {
                // res.push([nums[i], nums[l++], nums[r--]])
                // while (l < r && nums[l] === nums[l - 1]) l++
                // while (l < r && nums[r] === nums[r + 1]) r--
                res.push([nums[i], nums[l], nums[r]])
                while (l < r && nums[l] === nums[l + 1]) l++
                while (l < r && nums[r] === nums[r - 1]) r--
                l++
                r--
            } else if (sum < 0) {
                l++
            } else {
                r--
            }
        }
        while (i < len - 1 && nums[i] === nums[i + 1]) i++
    }
    return res
};
console.log(
    // threeSum([-1,0,1,2,-1,-4]) // [[-1,-1,2],[-1,0,1]]
    threeSum([-2,0,1,1,2]) // [[-1,-1,2],[-1,0,1]]
);