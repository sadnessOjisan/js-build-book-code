import * as React from "react";

interface State {
  text: string;
}

class App extends React.Component<{}, State> {
  state = {
    text: "initial text"
  };

  componentDidMount() {
    this.setState({ text: "mounted text" });
  }

  render() {
    return (
      <div>
        <p data-testid="text">{this.state.text}</p>
      </div>
    );
  }
}

export default App;
