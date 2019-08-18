import React from 'react';
import Button from 'react-bootstrap/Button'; 
//import FiboLoop from "./FiboLoop";

class CalcButtons extends React.Component {
   wayLoop(index) {
      console.log("Loop Way Calculation", index);
      var fiboNew;
      var fiboPrev = 1;
      var fiboFirst = 0;
  
      if (index <= 1 && index >= 0) return (index);
      for (let sequence = 2; sequence <= index; sequence++) {
          fiboNew = fiboFirst + fiboPrev;
          fiboFirst = fiboPrev;
          fiboPrev = fiboNew;
      }
      console.log("Calculation: ", fiboNew);
      return fiboNew;
      
   }

   wayRecursion() {
      console.log("Recursion Way Calculation");
   }

   wayReduce() {
      console.log("Reduce Way Calculation");
   }

   resetIndex() {
      console.log("Reset Index Input");
   }

   render () {
      return (
         <div className="buttoncard">
            <Button variant="success" onClick={this.wayLoop}>Loop Way</Button>
            <Button variant="success" onClick={this.wayRecursion}>Recursion Way</Button>
            <Button variant="success" onClick={this.wayReduce}>Reduce Way</Button>
            <Button variant="warning" onClick={this.resetIndex}>Reset</Button>
         </div>
      );
   }
};

export default CalcButtons;