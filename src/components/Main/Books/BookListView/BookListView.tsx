const BookListView = (props: {
  data: {
    title: string;
    author: string;
    genre: string;
    description: string;
    book_image: string;
    amazon_product_url: string;
    publisher: string;
  };
  category: string;
}): JSX.Element => {
  const book = props.data;

  return (
    <div className="bookCard">
      <div className="facebook">
        <img src={book.book_image} alt="book image" />
      </div>
      <div className="bookDesc">
        <h1>{book.title}</h1>
        <h2>Author: {book.author}</h2>
        <h3>Publisher: {book.publisher}</h3>
        <h3>Genre: {props.category}</h3>
        <p>{book.description}</p>
        <a href={book.amazon_product_url}>
          <img
            src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default BookListView;
