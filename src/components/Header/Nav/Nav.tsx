import React from 'react';
import { Link } from 'react-router-dom';
import catalogue from "../../../assets/catalogue.png";
import discounts from "../../../assets/discounts.png";
import bestsellers from "../../../assets/bestsellers.png";

const Nav = () => {
  return (
    <nav>
        <Link to="/"><img src={catalogue}/>Catalogue</Link>
        <Link to="/discounts"><img src={discounts}/>Discounts</Link>
        <Link to="/bestsellers"><img src={bestsellers}/>Bestsellers</Link>
    </nav>
  )
}

export default Nav