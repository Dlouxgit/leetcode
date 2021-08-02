/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) 
        return false
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        const cur = s[i]
        if (map.get(cur)) {
            map.set(cur, map.get(cur) + 1)
        } else {
            map.set(cur, 1)
        }
    }
    // console.log(map.keys())
    for (let i = 0; i < t.length; i++) {
        const cur = t[i]
        // console.log( cur,map.get(cur))
        if (map.get(cur)) {
            if (map.get(cur) === 1) {
                // console.log('23', cur)
                map.delete(cur)
            } else {
               
                map.set(cur, map.get(cur) - 1)
            }
        }
    }
    console.log(map.size)
    if (map.size === 0) {
        return true
    }
    return false
};
isAnagram('anagram', 'nagaram')