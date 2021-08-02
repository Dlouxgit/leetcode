/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const arr = s.split(' ')
    const map = new Map()
    const map2 = new Map()
    if (arr.length !== pattern.length) {
        return false
    }
    for (let i = 0; i < pattern.length; i++) {
        const tmp = map.get(pattern[i]) // a -> dog
        if (!tmp && !map2.get(arr[i])) {
            map.set(pattern[i], arr[i])
            map2.set(arr[i], pattern[i])
        } else {
            if (tmp !== arr[i]) {
                return false
            }
            continue
        }
    }
    return true
};
console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat fish'))
console.log(wordPattern('aaaa', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog dog dog dog'))