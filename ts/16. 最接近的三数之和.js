/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  var threeSumClosest = function(nums, target) {
//     const map = {}
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             for (let k = j + 1; k < nums.length; k++) {
//                 const sum = nums[i] + nums[j] + nums[k]
//                 map[sum] = true
//             }
//         }
//     }
//     let res
//     let tmp
//     Object.keys(map).map(ele => {
//         if (res == undefined) {
//             res = ele
//             tmp = Math.abs(target - ele)
//         } else {
//             if (tmp > Math.abs(target - ele)) {
//                 res = ele
//                 tmp = Math.abs(target - ele)
//             }
//         }
//     })
//     return res
// };
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b)
    let res
    let l 
    let r 
    for (let i = 0; i < nums.length; i++) {
        let tmp = target - nums[i]
        l = i + 1
        r = nums.length - 1
        while (l < r) {
            let sumLR = nums[l] + nums[r]
            if (tmp === sumLR) {
                return target
            } else {
                if (res == null) {
                    res = nums[i] + sumLR
                    console.log('res',res,nums[i], nums[l], nums[r])
                } else {
                    console.log('Math.abs(target - res)', Math.abs(target - res), Math.abs(target - nums[i] - sumLR))
                    if (Math.abs(target - res) > Math.abs(target - nums[i] - sumLR)) {
                        res = nums[i] + sumLR
                        console.log(nums[i], nums[l], nums[r])
                    }
                    if (tmp < sumLR) {
                        r--
                        continue
                    } else if (tmp > sumLR) {
                        l++
                        continue
                    } else {
                        return nums[i] + sumLR
                    }
                }
            }
        }
    }
    console.log(res)
    console.log(nums)
};

console.log(
    threeSumClosest([-1,2,1,-4], 1) // 2 (-1 + 2 + 1 = 2)
    // threeSumClosest([1,1,-1,-1,3], -1)
    ) // 2 (-1 + 2 + 1 = 2)
