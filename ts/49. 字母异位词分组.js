/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Object();
  for (let s of strs) {
    const count = new Array(26).fill(0);
    for (let c of s) {
      count[c.charCodeAt() - "a".charCodeAt()]++;
    }
    if (map[count]) {
      map[count].push(s);
    } else {
      map[count] = [s];
    }
  }
  return Object.values(map);
};
// var groupAnagrams = function (strs) {
//   const map = new Map();
//   for (let i = 0; i < strs.length; i++) {
//     const curWord = strs[i];
//     const sortWord = [...curWord]
//       .sort((a, b) => a.charCodeAt() - b.charCodeAt())
//       .join("");
//     map.set(sortWord, [...(map.get(sortWord) || []), curWord]);
//   }
//   return Array.from(map.values());
// };
console.log(
  "groupAnagrams",
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
); // [["bat"],["nat","tan"],["ate","eat","tea"]]
