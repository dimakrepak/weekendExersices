// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.


const count = (str) => {

    return str.toLowerCase().split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});


}

const longest = (ar, br) => {
    let str = ar + br
    let arr = Object.keys(count(str))
    arr = arr.sort()
    return arr = arr.join('')
}
console.log(longest('safsafsasaghfdh', 'adsfdsfafddstryuteue'));