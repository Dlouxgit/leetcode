/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
// var fourSumCount = function(nums1, nums2, nums3, nums4) {
//     const l = {}
//     const r = {}
//     for (let i = 0; i < nums1.length; i++) {
//         for (let j = 0; j < nums2.length; j++) {
//             const key = nums1[i] + nums2[j]
//             if (l[key] == undefined) {
//                 l[key] = 1
//             } else {
//                 l[key]++
//             }
//         }
//     }
//     for (let i = 0; i < nums3.length; i++) {
//         for (let j = 0; j < nums4.length; j++) {
//             const key = nums3[i] + nums4[j]
//             if (r[key] == undefined) {
//                 r[key] = 1
//             } else {
//                 r[key]++
//             }
//         }
//     }
//     console.log(l)
//     console.log(r)
//     let res = 0
//     const lArr = Object.keys(l)
//     const rArr = Object.keys(r)
//     for (let i = 0; i < lArr.length; i++) {
//         for (let j = 0; j < rArr.length; j++) {
//             if (lArr[i] == -rArr[j]) {
//                 res += l[lArr[i]] * r[rArr[j]]
//             }
//         }
//     }
//     console.log(res)
//     return res
// };
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const l = new Map();
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        const key = nums1[i] + nums2[j];
        l.set(key, (l.get(key) || 0) + 1);
      }
    }
    let res = 0;
    for (let i = 0; i < nums3.length; i++) {
      for (let j = 0; j < nums4.length; j++) {
        const key = nums3[i] + nums4[j];
        res += l.get(-key) || 0;
      }
    }
    console.log(res);
    return res;
  };
  

// fourSumCount([ 1, 2], [-2,-1], [-1, 2], [ 0, 2]) // 0
fourSumCount([-1,-1],
    [-1,1],
    [-1,1],
    [1,-1]) // 0