import React from 'react';
import Nav from './Nav/Nav';
import logo from "../../assets/logotype.png"; 
import ThemeButton from './ThemeButton/ThemeButton';
import { useContext } from 'react';
import { themeContext } from '../../context/themeContext';

const Header = ():JSX.Element => {
  const theme = useContext(themeContext);  
  const darkmode:string = "header"+theme.theme;

  return (
    <header className={darkmode}>
      <img id='logo' src={logo} alt="logo" />
      <Nav/>
      <ThemeButton/>
    </header>
  )
}

export default Header