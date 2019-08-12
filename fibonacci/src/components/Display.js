import React from 'react';

const Display = function(props) {
   return (
      <div className="index">
         <input type="text" name="index" placeholder="Index" />
         <span className="result">{props.fibonew}</span>
         <span className="stamp">Time Stamp</span>
      </div>
   );
}

export default Display;