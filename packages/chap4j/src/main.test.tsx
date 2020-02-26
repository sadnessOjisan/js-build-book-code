import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

it("mounted text", () => {
  const { getByTestId } = render(<App></App>);
  expect(getByTestId("text")).toHaveTextContent("mounted text");
});

it("click once", () => {
  const { getByTestId } = render(<App></App>);
  fireEvent(
    getByTestId("btn"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );
  expect(getByTestId("clicked-status")).toHaveTextContent("on");
});

it("click twice", () => {
  const { getByTestId } = render(<App></App>);
  fireEvent(
    getByTestId("btn"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );
  fireEvent(
    getByTestId("btn"),
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true
    })
  );
  expect(getByTestId("clicked-status")).toHaveTextContent("off");
});
