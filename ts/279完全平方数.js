/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let arr = []
    arr.push({
        step: 0,
        val: n
    })
    let res = 11110
    while(arr.length) {
        let pop = arr.pop()
        let val = pop.val
        let step = pop.step
        console.log('val', val)
        if (val === 0) {
            res = res > step ? step : res
            console.log('step', res)
            // return step
        }
        
        for (let i = 1; val - i * i >= 0; i++) {
            arr.push({
                val: val - i * i,
                step: step + 1
            })
        }
    }
    if (res) return res
    return false
};
// 12 3
// 13 2
console.log(numSquares(24))