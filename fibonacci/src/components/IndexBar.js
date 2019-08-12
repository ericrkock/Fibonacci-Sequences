import React from 'react';

class IndexBar extends React.Component {
   state = { index: ""}; 

   onFormSubmit = (event) => {
      event.preventDefault();
      this.props.onSubmit(this.state.index);
   }

   render () {
      return (
         <div>
            <form onSubmit={this.onFormSubmit}>
               <div className="field">
                  <label>Index to calculate?: </label>
                  <input 
                     type="text" 
                     value={this.state.index}
                     onChange = {(e) => this.setState({ index: e.target.value})}
                  />
               </div>
            </form>
         </div>
      );
   }
}

export default IndexBar;