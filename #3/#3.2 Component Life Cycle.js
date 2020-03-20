import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("I'm a constructor");
  }
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("Hey! component just be rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  render() {
    console.log("I'm a render");
    return (
      <div>
        <h1>The Number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;