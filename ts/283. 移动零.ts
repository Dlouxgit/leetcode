/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    const n: number = nums.length
    let l: number = 0,
        r: number = n - 1
    while (l < r) {
        if (!nums[r]) {
            r--
            continue
        }

        if (nums[l]) {
            l++
            continue
        }
        else {
            const temp: number = nums[l]
            nums[l] = nums[r]
            nums[r] = temp
            l++
            r--
        }
    }
};

moveZeroes([0,1,0,3,12])