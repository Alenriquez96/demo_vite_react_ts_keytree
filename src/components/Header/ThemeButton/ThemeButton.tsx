import { useContext } from 'react';
import { themeContext } from '../../../context/themeContext';

const ThemeButton = () => {
    const {theme, toggleTheme } = useContext(themeContext);

  return (
    <button onClick={toggleTheme}>ThemeButton</button>
  )
}

export default ThemeButton