import React, { useState } from "react";

const SearchBar: () => JSX.Element = () => {
  const [book, setBook] = useState("");
  const [text, setText] = useState("");

  const handleSubmit: (e: any) => void = (e) => {
    e.preventDefault();
    setBook(e.target.book.value);
  };

  const handleText: () => void = () => {
    let inpField: any = document.querySelector("#searchBar > input[type=text]");
    setText("");
    inpField!.value = "";
  };

  return (
    <form onSubmit={handleSubmit} id="searchBar">
      <button>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.75 13.75L11.261 11.261M11.261 11.261C11.5744 10.9476 11.823 10.5755 11.9926 10.1661C12.1622 9.75659 12.2495 9.31771 12.2495 8.8745C12.2495 8.43129 12.1622 7.99241 11.9926 7.58294C11.823 7.17346 11.5744 6.8014 11.261 6.488C10.9476 6.1746 10.5755 5.926 10.1661 5.75639C9.75659 5.58678 9.31771 5.49948 8.8745 5.49948C8.43129 5.49948 7.99241 5.58678 7.58294 5.75639C7.17346 5.926 6.8014 6.1746 6.488 6.488C5.85493 7.12107 5.49927 7.9797 5.49927 8.875C5.49927 9.7703 5.85493 10.6289 6.488 11.262C7.12107 11.8951 7.9797 12.2507 8.875 12.2507C9.7703 12.2507 10.6289 11.8951 11.262 11.262L11.261 11.261ZM19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
            stroke="#D3BB3D"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
        name="book"
        type="text"
        placeholder="Type title, author, genre, editor, publisher..."
      />
      {text !== "" ? (
        <button onClick={handleText}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.75 7.75L12.25 12.25M12.25 7.75L7.75 12.25M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z"
              stroke="#D3BB3D"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      ) : (
        ""
      )}
    </form>
  );
};

export default SearchBar;
