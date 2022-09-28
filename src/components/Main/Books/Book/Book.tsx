import React from 'react'

const Book = (props:{data:object}) => {
    const book = props.data;
  return (
    <div className='bookCard'>
        <div className='facebook'></div>
        <div className='bookDesc'>
            <h1>Title of the book, that can go to two lines.</h1>
            <h3>Genre</h3>
            <p>Description of the title. Maybe a little synopsis. Needs to be limited to so many characters, then an ellipsis should show up ...</p>
        </div>
    </div>
  )
}

export default Book