/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let res = []
var combine = function(n, k) {
    res = []
    if (n < k || n <= 0 || k <= 0)
        return []
    generatorCombine(n, k, 0, [])
    console.log(res)
}

function generatorCombine(n, k, index, arr) {
    if (k === arr.length)
        return res.push([...arr])
    for (let i = index; i <= n; i++) {
        arr.push(i)
        generatorCombine(n, k, index + 1, arr)
        arr.pop()
    }
}
combine(4, 2)