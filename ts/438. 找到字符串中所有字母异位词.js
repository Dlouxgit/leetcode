/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let l = 0,
        r = 0
    const tempArr = ''
    const tempObj = {}
    const dic = {}
    const resArr = []
    for (let j = 0; j < p.length; j++) {
        if (dic[p[j]]) {
            dic[p[j]] = 'multi'
        } else {
            dic[p[j]] = 'single'
        }
    }
    for (let i = 0; i < s.length; i++) {
        let val = s[i]
        if (tempObj[val]) {
            if (dic[val] === 'multi') {

            } else {
                l = tempObj[val] + 1
            }
        }
        r++
        tempObj[s[i]] = i
        if (r - l > p.length) {
            l++
        }
        console.log('s',s.slice(l, r))
        console.log('l,r',l,r)
        const lrStr = [...s.slice(l, r)]
        const lrObj = {}
        lrStr.forEach((item, index) => {lrObj[item] = item})
        const res =(r - l === p.length) && lrStr.every(item => dic[item]) && [...p].every(item => lrObj[item])
        if (res) {
            resArr.push(l)
        }
    }
    console.log(resArr)
}

findAnagrams('vaa', 'aa')
// findAnagrams('cbaebabacd', 'abc')
// findAnagrams('abab', 'ab')
// findAnagrams('abacbabc', 'abc')
