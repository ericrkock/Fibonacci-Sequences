// 3 Ways How To Calculate the Fibonacci Sequences
// ===============================================

// 1. With a LOOP    //
// 2. With RECURSION //
// 3. With Reduce    //
// ================= //

// Add 3 EvenListeners to Buttons and ENTER key


function fiboLoop(index) {
   var fiboNew;
   var fiboPrev = 1;
   var fiboFirst = 0;
   if (index <= 1 && index >= 0) return index;
   for (let sequence = 2; sequence <= index; sequence++) {
       fiboNew = fiboFirst + fiboPrev;
       fiboFirst = fiboPrev;
       fiboPrev = fiboNew;
   }
   return fiboNew;
}