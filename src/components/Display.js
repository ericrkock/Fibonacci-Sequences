import React from "react";
import IndexBar from "./IndexBar";
import CalcButton from "./CalcButton";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: "",
      label: "Sequence Result",
      result: ""
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
        label: "The loop way result is : "
      });
    } else {
      this.setState({ label: "Index field is empty!" });
      //beep
    }
  };

  setRecursWay = () => {
    if (this.state.index !== "") {
      this.setState({
        label:
          "Hold on! ... the calculation can take up to more than 15 minutes ..."
      });
      const recursionResult = this.recursionWay(parseInt(this.state.index));
      this.setState({
        label: "The recursion way is : ",
        result: recursionResult
      });
    } else {
      this.setState({ label: "Index field is empty!" });
      //beep
    }
  };

  recursionWay = num => {
    if (num <= 1 && num >= 0) return num;
    return this.recursionWay(num - 1) + this.recursionWay(num - 2);
  };

  reduceWay = () => {
    if (this.state.index !== "") {
      const startValue = 1 + parseInt(this.state.index);
      const arr = Array.from(Array(startValue), (_, k) => k);
      const initialElement = [];
      const reducer = (acc, currentValue) => {
        return currentValue <= 1
          ? [...acc, currentValue]
          : [...acc, acc[acc.length - 1] + acc[acc.length - 2]];
      };
      const newArr = arr.reduce(reducer, initialElement);
      this.setState({
        result: newArr[parseInt(this.state.index)],
        label: "The reduce way result is : "
      });
    } else {
      this.setState({ label: "Index field is empty!" });
      //beep
    }
  };

  setFactorial = () => {
    if (this.state.index !== "") {
      const factorialResult = this.factorial(parseInt(this.state.index));
      this.setState({
        label: "The factorial way is : ",
        result: factorialResult
      });
    } else {
      this.setState({ label: "Index field is empty!" });
      //beep
    }
  };

  factorial = num => {
    if (num < 2) return num;
    return num * this.factorial(num - 1);
  };

  render() {
    return (
      <div className="index">
        <IndexBar
          input={this.state.index}
          handleChange={this.handleChange}
        />
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
              name={"Factorial"}
              variant={"info"}
              clicked={this.setFactorial}
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
