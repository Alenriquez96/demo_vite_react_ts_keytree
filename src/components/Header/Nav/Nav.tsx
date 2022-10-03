import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="3" fill="#637ACC" />
          <path
            d="M12 21V12.75M15.75 21V12.75M8.25 21V12.75M3 9L12 3L21 9M19.5 21V10.332C17.0189 9.94356 14.5113 9.74897 12 9.75C9.449 9.75 6.944 9.95 4.5 10.332V21M3 21H21M12 6.75H12.008V6.758H12V6.75Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Catalogue
      </Link>
      <Link to="/discounts">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="3" fill="#637ACC" />
          <path
            d="M2.25 18.75C7.58561 18.7457 12.898 19.4522 18.047 20.851C18.774 21.049 19.5 20.509 19.5 19.755V18.75M3.75 4.5V5.25C3.75 5.44891 3.67098 5.63968 3.53033 5.78033C3.38968 5.92098 3.19891 6 3 6H2.25M2.25 6V5.625C2.25 5.004 2.754 4.5 3.375 4.5H20.25M2.25 6V15M20.25 4.5V5.25C20.25 5.664 20.586 6 21 6H21.75M20.25 4.5H20.625C21.246 4.5 21.75 5.004 21.75 5.625V15.375C21.75 15.996 21.246 16.5 20.625 16.5H20.25M21.75 15H21C20.8011 15 20.6103 15.079 20.4697 15.2197C20.329 15.3603 20.25 15.5511 20.25 15.75V16.5M20.25 16.5H3.75M3.75 16.5H3.375C3.07663 16.5 2.79048 16.3815 2.5795 16.1705C2.36853 15.9595 2.25 15.6734 2.25 15.375V15M3.75 16.5V15.75C3.75 15.5511 3.67098 15.3603 3.53033 15.2197C3.38968 15.079 3.19891 15 3 15H2.25M15 10.5C15 11.2956 14.6839 12.0587 14.1213 12.6213C13.5587 13.1839 12.7956 13.5 12 13.5C11.2044 13.5 10.4413 13.1839 9.87868 12.6213C9.31607 12.0587 9 11.2956 9 10.5C9 9.70435 9.31607 8.94129 9.87868 8.37868C10.4413 7.81607 11.2044 7.5 12 7.5C12.7956 7.5 13.5587 7.81607 14.1213 8.37868C14.6839 8.94129 15 9.70435 15 10.5V10.5ZM18 10.5H18.008V10.508H18V10.5ZM6 10.5H6.008V10.508H6V10.5Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Discounts
      </Link>
      <Link to="/bestsellers">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="3" fill="#637ACC" />
          <path
            d="M21 8.25C21 5.765 18.901 3.75 16.312 3.75C14.377 3.75 12.715 4.876 12 6.483C11.285 4.876 9.623 3.75 7.687 3.75C5.1 3.75 3 5.765 3 8.25C3 15.47 12 20.25 12 20.25C12 20.25 21 15.47 21 8.25Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Bestsellers
      </Link>
    </nav>
  );
};

export default Nav;
