import { useEffect, useState } from "react";
import Book from "@/components/Main/Books/Book/Book";

const books = (props: any) => {
  const [books, setBooks] = useState([
    {
      title: "",
      genre: "",
      description: "",
      book_image: "",
    },
  ]);
  const search: string = props.title;
  const view: boolean = props.display;

  const filtered:
    | {
        title: string;
        genre: string;
        description: string;
        book_image: string;
      }[]
    | undefined = books.filter((book) => book.title.includes(search));

  useEffect(() => {
    const httpReq = async () => {
      try {
        let res = await fetch(
          "https://api.nytimes.com/svc/books/v3/lists/series-books.json?api-key=U5XodN0WD6AxEelHTmcyeksK5nC8On22"
        );
        let data = await res.json();
        setBooks(data.results.books);
      } catch (error) {
        console.log(error);
      }
    };
    httpReq();
  }, []);

  const handleSelection = () => {
    if (view) {
      return (
        <section id="books">
          {filtered.map((book, i: number) => (
            <Book key={i} data={book} />
          ))}
        </section>
      );
    } else {
      return (
        <section
          id="books"
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
};

export default books;
