import React from 'react';
import Nav from './Nav/Nav';
import logo from "../../assets/logotype.png"; 

const Header = () => {
  return (
    <header>
      <img id='logo' src={logo} alt="logo" />
      <Nav/>
    </header>
  )
}

export default Header