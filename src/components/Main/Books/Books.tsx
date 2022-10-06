import { useEffect, useState, useContext } from "react";
import Book from "@/components/Main/Books/Book/Book";
import BookListView from "@/components/Main/Books/BookListView/BookListView";
import { Context } from "@/context/context";

const books = (props: { title: string; display: boolean }): JSX.Element => {
  const { getCategories, selectedCategories } = useContext(Context);
  const [allBooks, setAllBooks]: any = useState([]);

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

  let filteredCategories:
    | {
        title: string;
        genre: string;
        author: string;
        description: string;
        book_image: string;
        amazon_product_url: string;
        publisher: string;
      }[][];

  filteredCategories = selectedCategories.map((categories) => {
    return allBooks.filter((books: any) => books.genre.includes(categories));
  });

  let newAllBooks: {
    title: string;
    genre: string;
    author: string;
    description: string;
    book_image: string;
    amazon_product_url: string;
    publisher: string;
  }[] = [];
  let concat = () => {
    if (filteredCategories.length === 0) {
      newAllBooks = allBooks;
    } else {
      for (let i = 0; i < filteredCategories.length; i++) {
        for (let j = 0; j < filteredCategories[i].length; j++) {
          newAllBooks.push(filteredCategories[i][j]);
        }
      }
    }
  };
  concat();

  const filtered = newAllBooks.filter((book, i: number) => {
    return (
      book.title.includes(search.toUpperCase()) ||
      book.author.includes(search) ||
      book.publisher.includes(search) ||
      book.genre.includes(search)
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
