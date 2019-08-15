import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CalcButtons from './components/CalcButtons';
import Display from './components/Display';

class App extends React.Component {
   render () {
      return (
         <div>
            <div className="header">
               <h1>Fibonacci Sequences</h1>
               <hr className="divide-line-header" />
               <p>An Own Challenge</p>
            </div>
            
            <div className="displaybox">
               <h3>3 Ways to calculate the sequences</h3>
               <div><Display /></div>
               <div><CalcButtons /></div>
            </div>
         
            <div className="footer">
               <span>Presented by Eric R. Kock - Aug. 2019 | 
                  <a href="https://about.me/erickock" target="_blank"> About Me</a> -
                  <a href="https://codepen.io/EricRKock/" target="_blank"> CodePen </a> - 
                  <a href="https://github.com/ericrkock/" target="_blank"> GitHub</a>
               </span> 
            </div>
         </div>
      );
   };
};

ReactDOM.render(<App />, document.getElementById('root'));
