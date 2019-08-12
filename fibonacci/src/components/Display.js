import React from 'react';
import IndexBar from './IndexBar';

class Display extends React.Component {
   onIndexSubmit(index) {
      console.log("Index: ", index);
   }

   render () {
      return (
         <div className="index">
            <div>
               <span><IndexBar onSubmit={this.onIndexSubmit}/></span>
               <span className="result">Sequence Result</span>
               <span className="stamp">Time Stamp</span>
            </div>
         </div>
      );
   }
}

export default Display;