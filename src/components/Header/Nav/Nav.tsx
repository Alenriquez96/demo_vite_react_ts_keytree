import React from "react";
import { Link } from "react-router-dom";
import catalogue from "../../../assets/catalogue.svg";
import discounts from "../../../assets/discounts.svg";
import bestsellers from "../../../assets/bestsellers.svg";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={catalogue} />
        Catalogue
      </Link>
      <Link to="/discounts">
        <img src={discounts} />
        Discounts
      </Link>
      <Link to="/bestsellers">
        <img src={bestsellers} />
        Bestsellers
      </Link>
    </nav>
  );
};

export default Nav;
