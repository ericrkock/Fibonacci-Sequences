import React from 'react';
import IndexBar from './IndexBar';

class Display extends React.Component {
   constructor(props) {
      super(props);
      this.state = { index: ''};
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
         </div>
      );
   }
}

export default Display;