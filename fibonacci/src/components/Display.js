import React from 'react';
import IndexBar from './IndexBar';
import CalcButtons from './CalcButtons';

class Display extends React.Component {
   constructor(props) {
      super(props);
      this.state = { 
         index: '',
         result: '',
         stamp: ''};
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
            <span className="result">Sequence Result</span>
            <span className="stamp">Time Stamp</span>
            <CalcButtons />
         </div>
      );
   }
}

export default Display;