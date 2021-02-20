// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H

const init = str => {
    str = str.toUpperCase().split(' ')
    str=str.map(c => c.charAt(0))
    str=str.join('.')
    console.log(str);
}


init('Sam Harris')