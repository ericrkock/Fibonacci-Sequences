import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Display from './Display';
import CalcButtons from './CalcButtons';
import * as serviceWorker from './serviceWorker';

const App = function() {   // Can also be const App = () => { }
   return (
      <div className="displaybox">
         <CalcButtons>
            <Display 
               way = "1. Loop "
               index = "10"
               result="Loop result"
            />
         </CalcButtons>
         <CalcButtons>
            <Display 
               way = "2. Recursion "
               index = "15"
               result="Recursion result"
            />
         </CalcButtons>
         <CalcButtons>
            <Display 
               way = "3. Reduce "
               index = "20"
               result="Reduce result"
            />
         </CalcButtons>  
      </div>
   );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
