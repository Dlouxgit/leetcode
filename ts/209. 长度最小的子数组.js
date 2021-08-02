/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let l = 0,
        r = 0,
        sum = 0,
        res = nums.length + 1
    while(l < nums.length) {
        
        // console.log(r)
        // console.log('sum', sum)
        if (r < nums.length && sum < target) {
            sum += nums[++r]
        } else {
            sum >= target && (res = Math.min(res, r - l))
            sum -= nums[l++]
        }
    }
    console.log(res)
    if (res === nums.length + 1)
        return 0
    return res
    
};
minSubArrayLen(7, [2,3,1,2,4,3])
// minSubArrayLen(15, [1,2,3,4,5])