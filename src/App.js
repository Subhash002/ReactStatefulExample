import CodeInput from "./CodeInput";
import "./styles.css";

import React, { Component } from "react";

class App extends Component {
  state = {
    code: ""
  };
  render() {
    return (
      <div className="container">
        <div className="product-code">{this.state.code}</div>
        <CodeInput onSet={(code) => this.setState({ code })} />
      </div>
    );
  }
}

export default App;
