const tribonacci = (n) => {
    if (n === 1) return 0;
    else if (n === 2) return 0;
    else if (n === 3) return 1;

    let prevOne = 0;
    let prevTwo = 0;
    let curr = 1;

    for (let i = 3; i < n; i++) {
        const next = prevOne + prevTwo + curr;
        prevOne = prevTwo;
        prevTwo = curr;
        curr = next;
    }

    return curr;
}

console.log(tribonacci(10));