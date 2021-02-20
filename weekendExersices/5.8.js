// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

let arr = ['dima', 'yossi', 'shirrr', 'dadas', 'tata', 'adf', 'didima']

let maxLength = arr.reduce((a, v) => a.length < v.length ? v : a).length
arr = arr.filter(str => str.length === maxLength)

console.log(arr);
