import { useEffect, useState, useContext } from "react";
import Book from "@/components/Main/Books/Book/Book";
import BookListView from "@/components/Main/Books/BookListView/BookListView";
import { Context } from "@/context/context";

const books = (props: { title: string; display: boolean }): JSX.Element => {
  const { getCategories, selectedCategories } = useContext(Context);
  console.log(selectedCategories);

  const [allBooks, setAllBooks] = useState([
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

  useEffect(() => {
    const httpReq = async () => {
      try {
        let res = await fetch(
          "https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=U5XodN0WD6AxEelHTmcyeksK5nC8On22"
        );
        let data: { results: { lists: [] } } = await res.json();
        let lists: { books: object[] }[] = data.results.lists;

        setTimeout(function () {
          getCategories([...data.results.lists]);
          lists.map((list: any) => {
            return list.books.map((book: any) => {
              book.genre = list.list_name;
              return allBooks.push(book);
            });
          });
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };
    httpReq();
  }, []);

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
    | undefined = allBooks.filter((book, i: number) => {
    console.log(selectedCategories[i]);

    return (
      book.title.includes(search.toUpperCase()) ||
      book.author.includes(search) ||
      book.publisher.includes(search) ||
      book.genre.includes(search) ||
      book.genre === selectedCategories[i]
    );
  });

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

  if (allBooks.length <= 1) {
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
    // document.getElementsByClassName("bookCard")[0].style.display = "none";
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
