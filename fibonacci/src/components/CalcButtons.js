import React from 'react';
import Button from 'react-bootstrap/Button'; 
import Display from './Display';

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
      //this.setState({ result: fiboNew});
      //console.log("Calculation: ", fiboNew);
      //return this.result;
      
   }

   wayRecursion(index) {
      console.log("Recursion Way Calculation");
      if (index <= 1 && index >= 0) return index;
      //return wayRecursion(index-1) + wayRecursion(index-2);
   }

   wayReduce() {
      console.log("Reduce Way Calculation");
   }

   resetIndex() {
      console.log("Reset Index Input");
   }

   render () {
      return (
         <div>
            <Display />
            <div className="buttoncard">
               <div className="buttonset">
                  <Button variant="success" onClick={this.wayLoop}>Loop Way</Button>
                  <Button variant="success" onClick={this.wayRecursion}>Recursion Way</Button>
                  <Button variant="success" onClick={this.wayReduce}>Reduce Way</Button>
                  <Button variant="warning" onClick={this.resetIndex}>Reset</Button>
               </div>
            </div>
         </div>
      );
   }
};

export default CalcButtons;