import Nav from "./Nav/Nav";
import logo from "../../assets/logotype.svg";
import ThemeButton from "./ThemeButton/ThemeButton";
import Sidebar from "./Sidebar/Sidebar";
import { useContext } from "react";
import { themeContext } from "../../context/themeContext";

const Header = (): JSX.Element => {
  const theme = useContext(themeContext);
  const darkmode: string = "header" + theme.theme;

  return (
    <header className={darkmode}>
      <img id="logo" src={logo} alt="logo" />
      <Nav />
      <ThemeButton />
      <Sidebar />
    </header>
  );
};

export default Header;
