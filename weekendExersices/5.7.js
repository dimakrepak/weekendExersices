// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


let arr = ['dima', 'yossi', 'shirrr', 'dadas', 'tata','adf']

arr = arr.reduce((a, v) => a.length < v.length ? a : v).length
console.log(arr);
