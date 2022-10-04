import { useEffect, useState } from "react";
import Book from "@/components/Main/Books/Book/Book";
import BookListView from "@/components/Main/Books/BookListView/BookListView";

const books = (props: any) => {
  const [books, setBooks] = useState([
    {
      title: "",
      genre: "",
      author: "",
      description: "",
      book_image: "",
      amazon_product_url: "",
      publisher: "",
    },
  ]);
  const search: string = props.title;
  const view: boolean = props.display;

  const filtered:
    | {
        title: string;
        genre: string;
        author: string;
        description: string;
        book_image: string;
        amazon_product_url: string;
        publisher: string;
      }[]
    | undefined = books.filter((book) => book.title.includes(search));

  useEffect(() => {
    const httpReq = async () => {
      try {
        let res = await fetch(
          "https://api.nytimes.com/svc/books/v3/lists/manga.json?api-key=U5XodN0WD6AxEelHTmcyeksK5nC8On22"
        );
        let data = await res.json();
        setTimeout(function () {
          setBooks(data.results.books);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };
    httpReq();
  }, []);

  const handleSelection = () => {
    if (view) {
      return (
        <section className="books-list">
          {filtered.map((book, i: number) => (
            <BookListView key={i} data={book} />
          ))}
        </section>
      );
    } else {
      return (
        <section
          className="books-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 364px)",
            width: "100%",
            gridGap: "37px",
            placeContent: "center",
            margin: "20px",
          }}
        >
          {filtered.map((book, i: number) => (
            <Book key={i} data={book} />
          ))}
        </section>
      );
    }
  };

  if (books[0].title === "") {
    return (
      <div className="spinnerContainer">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {handleSelection()}
      </div>
    );
  }
};

export default books;
