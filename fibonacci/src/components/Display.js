import React from 'react';
import IndexBar from './IndexBar';

class Display extends React.Component {
   onIndexSubmit(index) {
      console.log("Index: ", index);
   }

   render () {
      return (
         <div className="index">
            <span><IndexBar onSubmit={this.onIndexSubmit}/></span>
            <span className="result">Sequence Result</span>
            <span className="stamp">Time Stamp</span>
         </div>
      );
   }
}

export default Display;