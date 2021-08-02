/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return ''
    const hashMap = {}
    const tmpMap = {}
    for (let w of t) 
        !hashMap[w] && (hashMap[w] = 0) || hashMap[w]++
    console.log(hashMap)
    let l = 0
    let r = 0
    while (r < s.length) {
        const cur = s[r]
        if (!hashMap[cur]) {
            r++
            continue
        }

        if (tmpMap[cur] == undefined) {
            tmpMap[cur] = [r]
        } else {
            tmpMap[cur].push(r)
        }
        


        r++
    }

    const keys = Object.keys(hashMap)




    // const res = []
    const vals = (k) => tmpMap[k]
    // vals(keys[0]).map(key0 => {
    //     vals(keys[1]).map(key1 => {
    //         vals(keys[2]).map(key2 => {
    //             res.push([key0, key1, key2])
    //         })
    //     })
    // })
    console.log('tmpMap', tmpMap)
    console.log('keys', keys)
    console.log('tmpMap', vals(keys[0]))


    const res = []
    const tmp = []

    const fn = function (index, arr = []) {
        if (hashMap[keys[index]] > 1) {
            console.log('hashMap[keys[index]]', keys[index] , hashMap[keys[index]])
            if (vals(keys[index])) {
                console.log('vals(keys[index])',vals(keys[index]))
                vals(keys[index]).map(key => {
                    if (index < keys.length - 1) {
                        console.log('kwt', keys[index])
                        fn(index + 1, [...arr, key])
                    } else {
                        tmp.push([...arr, key])
                        console.log('temp', tmp)
                        if (tmp.length == hashMap[keys[index]]) {
                            res.push([...tmp, key])
                        }
                    }
                })
            } else {
                res.push('')
            }
        } else {
            if (vals(keys[index])) {
                vals(keys[index]).map(key => {
                    if (index < keys.length - 1) {
                        console.log('kwt', keys[index])
                        fn(index + 1, [...arr, key])
                    } else {
                        tmp.push([...arr, key])
                        console.log('tmp.push([...arr, key])', tmp)
                        console.log('hashMap[keys[index]]', hashMap[keys[index]])
                        if (tmp.length == hashMap[keys[index]]) {
                            res.push([...tmp, key])
                        }
                        // res.push([...arr, key])
                    }
                })
            } else {
                res.push('')
            }
        }
    }
    fn(0)
    if (res[0] == '') return ''
    console.log('fn(0)', res)

    if (res.length === 0) return ''
    console.log(res)

    let MIN_ROUTE
    res.map(array => {
        const min = Math.min(...array)
        const max = Math.max(...array)
        const result = max - min
        if (MIN_ROUTE == null) {
            MIN_ROUTE = {
                result,
                min,
                max
            }
        } else {
            if (result < MIN_ROUTE.result) {
                MIN_ROUTE = {
                    result,
                    min,
                    max
                }
            }
        }
    })
    console.log('res', res)

    console.log(MIN_ROUTE)
    

    console.log(tmpMap)
    console.log(s.slice(MIN_ROUTE.min, MIN_ROUTE.max + 1))
}

// minWindow('ADOBECODEBANC', 'ABC') // BANC
// minWindow('a', 'a') // a
// minWindow('aaa', 'aa') // a
minWindow('aab', 'aab') // a
// minWindow('a', 'b') // a