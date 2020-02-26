import * as React from "react";
import * as ReactDOM from "react-dom";
import cat from "./cat.png";

const Main: React.FC = () => (
  <div>
    <img src={cat}></img>
  </div>
);

ReactDOM.render(<Main></Main>, document.getElementById("root"));
