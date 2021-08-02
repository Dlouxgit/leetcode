/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let l = 0;
  let r = 0;
  const maxLen = p.length;
  const hashCount = {};
  let tmpCount = {};
  const res = [];
  for (let t of p) {
    (hashCount[t] && hashCount[t]++) || (hashCount[t] = 1);
  }

  while (r < s.length) {
    const t = s[r];

    if (!hashCount[t]) {
        tmpCount = {};
        l = r;
    } else {
        (tmpCount[t] && tmpCount[t]++) || (tmpCount[t] = 1);
    }
    r++;
    if (r - l === maxLen) {
      if (
        Object.keys(hashCount).every(
          (key) => hashCount[key] === tmpCount[key] || tmpCount[key] === 0
        )
      ) {
        res.push(l);
      }
      tmpCount[s[l++]]--;
    }
  }
  return res;
};
// findAnagrams('vaa', 'aa')
// findAnagrams('cbaebabacd', 'abc')
// findAnagrams('abab', 'ab')
// findAnagrams('abacbabc', 'abc')
findAnagrams("acdcaeccde", "c");
