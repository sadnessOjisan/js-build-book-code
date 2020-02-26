import * as React from "react";
import * as ReactDOM from "react-dom";
import "./style";

const Main: React.FC = () => (
  <div>
    <h1 className="title">Hello</h1>
  </div>
);

ReactDOM.render(<Main></Main>, document.getElementById("root"));
