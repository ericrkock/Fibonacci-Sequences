import React from 'react';


function FiboLoop(index) {
   var fiboNew;
   var fiboPrev = 1;
   var fiboFirst = 0;
   if (index <= 1 && index >= 0) return index;
   for (let sequence = 2; sequence <= index; sequence++) {
       fiboNew = fiboFirst + fiboPrev;
       fiboFirst = fiboPrev;
       fiboPrev = fiboNew;
   }
   console.log(fiboNew);
   return fiboNew;
}

export default FiboLoop;