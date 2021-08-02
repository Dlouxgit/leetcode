function lengthOfLongestSubstring(s: string): number {
    let l: number = 0,
        r: number = -1,
        res: number = 0,
        freq: any = {}
    while (l < s.length) {
        if (freq[s[r + 1]] === undefined && (r + 1 < s.length)) {
            console.log('top l',l,'r',r)
            r++
            freq[s[r]] = r
        }
        else {
            console.log('l',l,'r',r)
            res = Math.max(res, r - l + 1)
            if (r === s.length - 1) break
            // res = r - l + 1
            // freq[s[l++]]--
            if (l < freq[s[r + 1]] + 1) {
                l = freq[s[r + 1]] + 1
            }
            // if (r + 1 < s.length) {
                r++
            // }
            freq[s[r]] = r
        }
    }
    console.log(res)
    return res
};

const s: string = 'abcabcbb'
const s2: string = "pwwkew"

lengthOfLongestSubstring(s2)