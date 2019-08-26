import React from "react";

class IndexBar extends React.Component {
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.index);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Index to calculate >></label>
            <input
              type="text"
              value={this.props.input}
              onChange={this.props.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default IndexBar;
