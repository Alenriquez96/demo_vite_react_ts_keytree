// import "@types/jest";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "@/App";

describe("<App/>", () => {
  it("should render app component", async () => {
    render(<App />);
  });
});
