function search(nums: number[], target: number): number {
    const n: number = nums.length
    let l: number = 0, 
        r: number = n -1
    while (l <= r) {
        const mid: number = Math.floor(l + (r - l) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (target > nums[mid]) {
            l = mid + 1
        }

        if (target < nums[mid]) {
            r = mid - 1
        }
        
    }

    return -1
}

search([-1,0,3,5,9,12], 9)