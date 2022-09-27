import React from 'react';
import Nav from './Nav/Nav';

const Header = () => {
  return (
    <header>
      <img id='logo' src="https://images.squarespace-cdn.com/content/v1/5d262b2bf4a34e00016960a0/1581964585062-IBSUGHZQ0W61T9LI12CW/BOOKSTORE.png?format=1000w" alt="logo" />
      <Nav/>
    </header>
  )
}

export default Header