import BookListView, {
  Props,
} from "@/components/Main/Books/BookListView/BookListView";
import { render } from "@testing-library/react";

describe("<App/>", () => {
  const mockProps: Props = {
    data: {
      title: "hola",
      author: "hola",
      genre: "hola",
      description: "hola",
      book_image: "hola",
      amazon_product_url: "hola",
      publisher: "hola",
    },
  };
  it("should render booklistview", async () => {
    render(<BookListView {...mockProps} />);
  });
});
