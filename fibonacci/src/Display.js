import React from 'react';

const Display = function(props) {
   return (
      <div className="displayway">
         <div>
            <span className="theway">{props.way}</span>
            <span className="index">{props.index}</span>
            <span className="result">{props.result}</span>
         </div>
      </div>
   );
};

export default Display;