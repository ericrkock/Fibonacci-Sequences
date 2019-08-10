import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalcButtons from './CalcButtons';
import Display from './Display';

const App = function() { 
   return (
      <div className="displaybox">

          <container>
            <row><h3>3 Ways to calculate Fibonacci Sequences</h3></row>
            <row><Display /></row>
            <row><CalcButtons /></row>
         </container>
      </div>

   );
};

ReactDOM.render(<App />, document.getElementById('root'));
