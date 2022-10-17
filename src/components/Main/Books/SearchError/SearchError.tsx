import React from "react";

const SearchError = () => {
  return (
    <div
      style={{
        margin: "100px auto",
        color: "red",
        border: "3.5px solid red",
        borderRadius: "9px",
        display: "flex",
        padding: "13px",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ margin: "0 5px" }}
      >
        <path
          d="M10 7V10.75M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM10 13.75H10.0075V13.7575H10V13.75Z"
          stroke="red"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Sorry, no books match with your search
    </div>
  );
};

export default SearchError;
