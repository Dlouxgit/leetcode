const res = []
const a = {
    '0': ' ',
    '1': '',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
}
var letterCombinations = function(digits) {
    if (digits.length === 0)
        return res
    generatorCombinations(digits, 0, '')
    return res
};

function generatorCombinations(digits, index, str) {
    if (index === digits.length) {
        return res.push(str)
    }
    for (let i = 0, len = a[digits[index] + ''].length; i < len; i++) {
        generatorCombinations(digits, index + 1, str + a[digits[index] + ''][i])
    }
}
letterCombinations("")
console.log(res)