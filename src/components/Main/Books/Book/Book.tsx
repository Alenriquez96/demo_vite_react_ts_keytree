const Book = (props: {
  data: {
    title: string;
    genre: string;
    description: string;
  }
}) => {
  const book = props.data;
  return (
    <div className='bookCard'>
      <div className='facebook'></div>
      <div className='bookDesc'>
        <h1>{book.title}</h1>
        <h3>Genre</h3>
        <p>{book.description}</p>
      </div>
    </div>
  )
}

export default Book