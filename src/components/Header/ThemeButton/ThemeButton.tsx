import { useContext } from "react";
import { Context } from "@/context/context";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(Context);

  return (
    <button onClick={toggleTheme}>
      {theme === "" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeButton;
