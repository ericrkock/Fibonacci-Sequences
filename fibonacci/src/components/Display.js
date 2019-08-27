import React from "react";
import IndexBar from "./IndexBar";
import CalcButton from "./CalcButton";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "",
      toCalc: "",
      label: "Sequence Result",
      result: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ index: event.target.value });
  }

  resetState = () => {
    this.setState({ 
      index: "", 
      result: "", 
      label: "Sequence Result" 
    });
  };

  loopWay = () => {
    var fiboNew;
    var fiboPrev = 1;
    var fiboFirst = 0;
    if (this.state.index !== "") {
      if (this.state.index <= 1 && this.state.index >= 0)
        fiboNew = this.state.index;
      for (let sequence = 2; sequence <= this.state.index; sequence++) {
        fiboNew = fiboFirst + fiboPrev;
        fiboFirst = fiboPrev;
        fiboPrev = fiboNew;
      }
      this.setState({
        result: fiboNew,
        label: "The loop way result is "
      });
    } else {
      console.log("Index field is empty");
      //beep
    }
  };

  recursionWay = () => {
    console.log("Recursion Way Calculation", this.state.index);
    console.log("recursionWay evoked");
    if (this.state.index <= 1 && this.state.index >= 0) return this.state.index;

    return (
      this.recursionWay(this.state.index - 1) +
      this.recursionWay(this.state.index - 2)
    );
  };

  setRecursWay = () => {
    console.log("setRec... Evoked");
    this.setState({ result: this.recursionWay() });
  };

  reduceWay = () => {
    const startValue = 1 + parseInt(this.state.index);
    const arr = Array.from(Array(startValue), (_, k) => k);
    const initialElement = [];
    
    const reducer = (acc, currentValue) => {
      return currentValue <= 1
        ? [...acc, currentValue]
        : [...acc, acc[acc.length - 1] + acc[acc.length - 2]];
    };

    const newArr = arr.reduce(reducer, initialElement);

    console.log("reducer: ", newArr[11]);
    
    this.setState({
      result: arr.reduce(reducer, initialElement),
      label: "The reduce way result is "
    });
  };

  render() {
    return (
      <div className="index">
        <IndexBar input={this.state.index} handleChange={this.handleChange} />
        <span className="result">{this.state.label}</span>
        <span className="result">{this.state.result}</span>
        <div className="buttoncard">
          <div className="buttonset">
            <CalcButton
              name={"Loop Way"}
              variant={"success"}
              clicked={this.loopWay}
            />
            <CalcButton
              name={"Recursion Way"}
              variant={"success"}
              clicked={this.setRecursWay}
            />
            <CalcButton
              name={"Reduce Way"}
              variant={"success"}
              clicked={this.reduceWay}
            />
            <CalcButton
              name={"Reset"}
              variant={"warning"}
              clicked={this.resetState}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
