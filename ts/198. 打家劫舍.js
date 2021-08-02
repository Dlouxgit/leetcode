/**
 * @param {number[]} nums
 * @return {number}
 */

// let map = {}

// var rob = function(nums) {
//     map = {}
//     return tryRob(nums, 0)
//     // for (let i = 0; i < len; i++) {
//     // }
// };

// function tryRob(nums, index) {
//     if (nums.length <= index) {
//         return 0
//     }
//     let res = 0
//     if (map[index] !== undefined) {
//         return map[index]
//     }

//     for (let i = index; i < nums.length; i++) {
//         res = Math.max(res, tryRob(nums, i + 2) + nums[i])
//         // console.log(i, res)
//     }

//     map[index] = res

//     return res
// }

// console.log(rob([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))

let map = new Array(nums.length).fill(-1)
var rob = function(nums) {
    map = new Array(nums.length).fill(-1)
    return tryRob(nums, 0)
}

function tryRob(nums, index) {
    if (nums.length === 0)
        return 0
    let res = 0
    if (map[index] !== -1)
        return map[index]
    for (let i = index; i < nums.length; i++)
        res = Math.max(res, tryRob(nums, i + 2) + nums[i])
    map[index] = res
    return res
}