import React, { useState } from 'react';


const SearchBar = () => {
    const [book, setBook] = useState("");

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        setBook(e.target.book.value);
    }    

  return (
    <form onSubmit={handleSubmit}>
        <input name='book' type="text" placeholder='Type title, author, genre, editor, publisher...'/>
    </form>
  )
}

export default SearchBar