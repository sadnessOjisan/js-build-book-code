import * as React from "react";
import * as ReactDOM from "react-dom";
import css from "./style.css";

console.log(css);

const Main: React.FC = () => (
  <div>
    <h1 className={css.title}>Hello</h1>
  </div>
);

ReactDOM.render(<Main></Main>, document.getElementById("root"));
