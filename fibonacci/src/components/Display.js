import React from 'react';
import IndexBar from './IndexBar';
import CalcButtons from './CalcButtons';

class Display extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
         index: '',
         toCalc: '',
         result: 'Sequence Result',
         stamp: 'Time Stamp'};
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({ index: event.target.value});
      console.log("onChange: ", event.target.value);
   }

    render () {
      return (
         <div className="index">
            <IndexBar input={this.state.index} handleChange={this.handleChange} />
            <span className="result">{this.state.result}</span>
            <span className="stamp">{this.state.stamp}</span>
            <CalcButtons 
               toCalc={this.state.index} 
               result={this.handleResult}
               stamp={this.state.stamp}
            />
         </div>
      );
   }
}

export default Display;