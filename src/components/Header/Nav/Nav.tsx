import React from 'react';
import { Link } from 'react-router-dom';
import catalogue from "../../../assets/catalogue.png";
import discounts from "../../../assets/discounts.png";
import bestsellers from "../../../assets/bestsellers.png";

const Nav = () => {
  return (
    <nav>
        <Link to="/catalogue"><img src={catalogue}/>Home</Link>
        <Link to="/discounts"><img src={discounts}/>List</Link>
        <Link to="/bestsellers"><img src={bestsellers}/>Contact</Link>
    </nav>
  )
}

export default Nav