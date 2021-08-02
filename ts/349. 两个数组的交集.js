/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set()
    const res = []
    for (let i = 0; i < nums1.length; i++) {
        if (!set.has(nums1[i])) {
            set.add(nums1[i])
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (set.has(nums2[i])) {
            res.push(nums2[i])
            set.delete(nums2[i])
        }
    }
    return res
};
intersection([1,2,2,1], [2,2])