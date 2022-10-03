const Book = (props: {
  data: {
    title: string;
    genre: string;
    description: string;
    book_image: string;
  };
}) => {
  const book = props.data;
  return (
    <div className="bookCard">
      <div className="facebook">
        <img
          style={{ width: "150px", height: "220px" }}
          src={book.book_image}
          alt=""
        />
      </div>
      <div className="bookDesc">
        <h1>{book.title}</h1>
        <h3>Genre</h3>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default Book;
