// Ex7 - Implement The Following JS Methods -
// Implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)




const iFilter = (arr, func) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}


const iForeach = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i)
    }

}
const iMap = (arr, func) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i], i))

    }
    return newArr
}

const arr = [1, 2, 3, 4, 5, 6]

console.log(iFilter(arr, (value, index) => value % 2 === 0));

iForeach(arr, (value, index) => arr[index] = value / 2)
console.log(arr);

console.log(iMap(arr, (value, index) => value * 2));
