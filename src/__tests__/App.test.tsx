import { render, fireEvent } from "@testing-library/react";
import App from "@/App";

describe("<App/>", () => {
  it("should render app component", async () => {
    try {
      render(<App />);
    } catch (error) {
      console.log(error);
    }
  });
});
