// Calculate the Fibonacci Sequences in Javascript - 3 Ways
// 1. Simple Way - Loop
// 2. Recursion Way
// 3. Reduced Way
// ========================================================

// 1. Simple Way
//console.log(fibonacciLoop(101));
function fibonacciLoop(index) {
    var fiboNew;
    var fiboPrev = 1;
    var fiboFirst = 0;
    if (index <= 1 && index >= 0) return index;
    for (let sequence = 2; sequence <= index; sequence++) {
        fiboNew = BigInt(fiboFirst) + BigInt(fiboPrev);
        fiboFirst = fiboPrev;
        fiboPrev = fiboNew;
    }
    return fiboNew;
}

// 2.1 Recursion Way
//console.log(fibonacciRecursion(50));
function fibonacciRecursion(index) {
    if (index <= 1 && index >= 0) return index;
    return (fibonacciRecursion(index-1)) + (fibonacciRecursion(index-2));
};

// 2.2 Recursion Way with memory
const fibonacci = (() => {
    const seq = [];
    return (n, num) => {
        if (n === num) return seq;
        seq.length < 2 ? seq.push(n) : seq.push(seq[n - 2] + seq[n - 1]);
    };
})();

const getSequence = (num, i = 0) => {
    let r;
    if (r = fibonacci(i, num)) return r;
    return getSequence(num, ++i);
}
//console.log(getSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// 3. Reduce function Way
const fiboNElement = n => {
    const arr = Array.from(Array(n), (_, k) => k);
    const initialElement = [];
    const reducer = (acc, currentValue) => {
        return currentValue <= 1
        ? [...acc, currentValue]
        : [...acc, acc[acc.length - 1] + acc[acc.length - 2]];
    };
    return arr.reduce(reducer, initialElement);
};
console.log(fiboNElement(91));  

// Factorial
//console.log(factorial(5));
function factorial(n) {
    if (n < 2) return n;
    return n * factorial(n -1);
}
