import React from 'react';

const CalcButtons = function(props) {
   return (
      <div className="buttoncard">
         <div className="calcways">{props.children}</div>
         <div className="buttons">
            <span className="green-calculate">Calculate</span>
            <span className="red-reset-index">Reset</span>
         </div>
      </div>
   );
};

export default CalcButtons;