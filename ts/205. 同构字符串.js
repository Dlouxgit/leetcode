/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if (s.length !== t.length)
        return false
    const map = new Map()
    const map2 = new Map()
    for (let i = 0; i < s.length; i++) {
        const sCur = s[i] 
        const tCur = t[i] 
        const mapValue = map.get(sCur) 
        const map2Value = map2.get(tCur) 
        if (!mapValue && !map2Value) {
            map.set(s[i], t[i])
            map2.set(t[i], s[i])
        } else {
            if (mapValue !== tCur || map2Value !== sCur) {
                return false
            }
            continue
        }
    }
    return true
};
console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
console.log(isIsomorphic('badc', 'baba'))