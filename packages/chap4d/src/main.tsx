import * as React from "react";
import * as ReactDOM from "react-dom";
import { Sub } from "./sub";

const Main: React.FC = () => (
  <div>
    <Sub></Sub>
  </div>
);

ReactDOM.render(<Main></Main>, document.getElementById("root"));
