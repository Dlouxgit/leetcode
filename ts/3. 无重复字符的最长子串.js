/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0,  
        r = -1,
        res = 0,
        map = {}
    while( l < s.length) {
        console.log(l , r, map)
        if (r + 1 < s.length && (map[s[r + 1]] == 0 || map[s[r + 1]] == null)) {
            map[s[++r]] = r
        } else {
            if (s.length - l < res)
                break
            map[s[l++]]--
        }
        res = Math.max(res, r - l + 1)
    }
    console.log(res)
    return res
};
lengthOfLongestSubstring("pwwkew")