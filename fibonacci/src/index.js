import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalcButtons from './components/CalcButtons';
import Display from './components/Display';

class App extends React.Component {
   render () {
      return (
         <div className="displaybox">

            <div>
               <div><h3>3 Ways to calculate Fibonacci Sequences</h3></div>
               <div><Display /></div>
               <div><CalcButtons /></div>
            </div>
         </div>
      );
   };
};

ReactDOM.render(<App />, document.getElementById('root'));
