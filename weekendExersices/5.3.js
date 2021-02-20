// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"


let string = "the_stealth_warrior"
string = string.includes('-') ? string.split('-') : string.split('_')
let newString = string.map(str => (str.charAt(0).toUpperCase()) + str.slice(1))
newString = newString.join('')
console.log(newString);