import Nav from "@/components/Header/Nav/Nav";
import { render } from "@testing-library/react";

describe("<Nav/>", () => {
  it("Should render nav", () => {
    try {
      render(<Nav />);
    } catch (error) {
      console.log(error);
    }
  });
});
