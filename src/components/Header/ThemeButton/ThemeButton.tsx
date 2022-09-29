import { useContext } from 'react';
import { themeContext } from '../../../context/themeContext';
import { MoonIcon,SunIcon } from '@chakra-ui/icons'

const ThemeButton = () => {
    const {theme, toggleTheme } = useContext(themeContext);

  return (
    <button style={{display:"grid", placeItems:"center", padding:"5px"}} onClick={toggleTheme}>{theme===""?<MoonIcon/>:<SunIcon/>}</button>
  )
}

export default ThemeButton