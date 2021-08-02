// var moveZeroes = function(nums) {
//     let res = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i])
//             res.push(nums[i])
//     }

//     for (let i = 0; i < res.length; i++) {
//         nums[i] = res[i]
//     }

//     for (let i = res.length; i < nums.length; i++) {
//         nums[i] = 0
//     }
//     console.log(nums)
// }
var moveZeroes = function(nums) {
    let res = [],
        k = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            nums[k] = nums[i]
            k++
        }
        console.log(nums, k, i)
    }
    for (let i = k; i < nums.length; i++) {
        nums[i] = 0
    }

}
// var moveZeroes = function(nums) {
//     let k = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i]) {
//             let temp = nums[i]
//             nums[i] = nums[k]
//             nums[k] = temp
//             k++
//         }
//     }

//     console.log(nums)
// }
// var moveZeroes = function(nums) {
//     let i = 0,
//         j = 0,
//         n = nums.length
//     while (i < n) {
//         if (nums[j] !== 0 && j < n )
//             j++
//         if (nums[i] === 0)
//             i++
//         let temp = nums[j]
//         nums[j] = nums[i]
//         nums[i] = temp
//         i++
//         j++
//     }
//     console.log(nums)
// }

moveZeroes( [2,0,1,0,3,12] )