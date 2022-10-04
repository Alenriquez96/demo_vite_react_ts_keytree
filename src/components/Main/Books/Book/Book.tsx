const Book = (props: {
  data: {
    title: string;
    genre: string;
    author: string;
    description: string;
    book_image: string;
    publisher: string;
    amazon_product_url: string;
  };
  category: string;
}) => {
  const book = props.data;

  return (
    <div className="bookCard">
      <div className="facebook">
        <img src={book.book_image} alt="book image" />
      </div>
      <div className="bookDesc">
        <h1>{book.title}</h1>
        <h3>Genre: {props.category}</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default Book;
