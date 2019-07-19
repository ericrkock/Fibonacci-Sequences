// Simple way
// Recursion way
// Reduced way

// Simple Way - Position
fibonacciSimple(); // Start the simple way
function fibonacciSimple() {
    const fibonacci = [0,1];
    var fiboNew;
    var fiboPrev = 1;
    var fiboFirst = 0;
    console.log("Pos:",1,"-", 0); // Show position 1
    console.log("Pos:",2,"-", 1); // Show position 2
    for (sequence = 3; sequence <= 102; sequence++) {
        fiboNew = fiboFirst + fiboPrev;
        fibonacci.push(fiboNew);
        fiboFirst = fiboPrev;
        fiboPrev = fiboNew;
        console.log("Pos:",sequence,"-",fiboNew); // Show each remaining positions
    }
    console.log(fibonacci); // Show Array
}

// Recursion Way - Index
var fibonacciRecursion = function(index) {
    if (index < 2) return index;
    return fibonacciRecursion(index-1) + fibonacciRecursion(index-2);
};
//console.log(fibonacciRecursion(4)); // Calculate and show the Fibonacci sequence on index
//fibonacciRecursion(5); // Calculate the Fibonacci sequence on index