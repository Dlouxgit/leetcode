/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        const mapVal = map.get(s[i])
        map.set(s[i], mapVal + 1 || 1)
    }
    // console.log(map)
    const arr = Array.from(map).sort((a, b) => b[1] - a[1])
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i][1]; j++) {
            res += arr[i][0]
        }
    }
    console.log(res)
    return res
};

frequencySort('tree') // 'eert'
frequencySort('cccaaa') // 'cccaaa'
frequencySort('Aabb') // 'bbAa'