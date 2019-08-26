import React from "react";
import Button from "react-bootstrap/Button";

class CalcButton extends React.Component {
  render() {
    return (
      <div>
        <Button variant={this.props.variant} onClick={this.props.clicked}>
          {this.props.name}
        </Button>
      </div>
    );
  }
}

export default CalcButton;
