import React from "react";
import Button from "react-bootstrap/Button";

var seq;
class CalcButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  onClickLoop = () => {
    this.wayLoop(this.props.toCalc);
  };
  onClickRecursion = () => {
    this.wayRecursion(this.props.toCalc);
  };
  onClickReduce = () => {
    this.wayReduce(this.props.toCalc);
  };

  handleResult = () => {
    this.props.result(seq);
    console.log("Handle Result");
  };

  // wayLoop = (index) => {
  //    var fiboNew;
  //    var fiboPrev = 1;
  //    var fiboFirst = 0;

  //    if (index <= 1 && index >= 0) return (index);
  //    for (let sequence = 2; sequence <= index; sequence++) {
  //        fiboNew = fiboFirst + fiboPrev;
  //        fiboFirst = fiboPrev;
  //        fiboPrev = fiboNew;
  //    }
  //    seq = fiboNew;
  //    console.log("Loop Way Calculation", index, seq);
  // }

  wayRecursion = index => {
    console.log("Recursion Way Calculation", index);
    if (index <= 1 && index >= 0) return index;
    //this.setState({result: (wayRecursion(index-1) + wayRecursion(index-2))});
  };

  wayReduce = index => {
    console.log("Reduce Way Calculation", index);
  };

  resetIndex = () => {
    seq = "Reset Index Input";
    console.log("Reset Index Input", seq);
  };

  render() {
    return (
      <div>
        <div className="buttoncard">
          <div className="buttonset">
            <Button variant="success" onClick={this.onClickLoop}>
              Loop Way
            </Button>
            <Button variant="success" onClick={this.onClickRecursion}>
              Recursion Way
            </Button>
            <Button variant="success" onClick={this.onClickReduce}>
              Reduce Way
            </Button>
            <Button variant="warning" onClick={this.resetIndex}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcButtons;
