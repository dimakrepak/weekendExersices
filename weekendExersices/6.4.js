// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


const count = (str) => {

    return str.toLowerCase().split('').reduce((total, letter) => {
        total[letter] ? total[letter]++ : total[letter] = 1;
        return total;
    }, {});


}


const isogram = (str) => {
    let arr = Object.values(count(str))
    let find = arr.find(n => n > 1)
    return find ? false : true

}

console.log(isogram("Dermatoglyphics"));
