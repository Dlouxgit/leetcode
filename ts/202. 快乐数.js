/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
     const map = new Map()
     const set = new Set() 
     const fn = (s) => {
         tmp = s + ''
         let sum = 0
        for (let i = 0; i < tmp.length; i++) {
            sum += tmp[i] ** 2
        }
        console.log('sum', sum)
        if (sum !== 1) {
            if (set.has(sum)) {
                return false
            } else {
                set.add(sum)
                return fn(sum)
            }
        }
        return true
    }
    const res = fn(n)
    console.log(res)
};
isHappy(19) // true
// isHappy(2) // false