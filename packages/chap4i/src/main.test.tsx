import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

it("mounted text", () => {
  const { getByTestId } = render(<App></App>);
  expect(getByTestId("text")).toHaveTextContent("mounted text");
});
