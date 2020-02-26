import * as React from "react";

interface State {
  text: string;
  isClicked: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    text: "initial text",
    isClicked: false
  };

  componentDidMount() {
    this.setState({ text: "mounted text" });
  }

  handleClick = () => {
    this.setState({ ...this.state, isClicked: !this.state.isClicked });
  };

  render() {
    return (
      <div>
        <p data-testid="text">{this.state.text}</p>
        <button onClick={this.handleClick} data-testid="btn">
          CLICK
        </button>
        <p>
          status:
          <span data-testid="clicked-status">
            {this.state.isClicked ? "on" : "off"}
          </span>
        </p>
      </div>
    );
  }
}

export default App;
