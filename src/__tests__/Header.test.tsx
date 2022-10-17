import { render, screen } from "@testing-library/react";
import Header from "@/components/Header/Header";
import App from "@/App";
import Nav from "@/components/Header/Nav/Nav";
import "@testing-library/jest-dom/extend-expect";

describe("<Header/>", () => {
  it("should render header", async () => {
    // try {
    // render();
    //   <App>
    //   <Header />
    //   </App>
    // } catch (error) {
    //   console.log(error);
    // }
  });
  it("should check for logo name", () => {
    const linkElement: any = screen.getByTestId("logo");
    expect(linkElement).toBeInTheDocument();
  });
});
