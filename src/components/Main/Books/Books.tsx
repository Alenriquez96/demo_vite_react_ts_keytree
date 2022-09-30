import { useEffect, useState } from "react";
import Book from "./Book/Book";

const books = (props: any) => {
  const [books, setBooks] = useState([
    {
      title: "",
      genre: "",
      description: "",
    },
  ]);

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

  let view: boolean = props.display;

  const handleSelection = () => {
    if (view) {
      return (
        <section id="books">
          {books.map((book, i: number) => (
            <Book key={i} data={book} />
          ))}
        </section>
      );
    } else {
      return (
        <section
          id="books"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {books.map((book, i: number) => (
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
