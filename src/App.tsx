import { useState } from "react";
import Main from "@/components/Main/Main";
import Header from "@/components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/styles/styles.css";
import { themeContext } from "@/context/themeContext";

function App(): JSX.Element {
  const [theme, setTheme] = useState("");
  const darkmode: string = "App" + theme;

  const toggleTheme = () => (theme === "" ? setTheme("-dark") : setTheme(""));

  const themeData = {
    theme,
    toggleTheme,
  };

  return (
    <div className={darkmode}>
      <themeContext.Provider value={themeData}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<Main />} path="/" />
          </Routes>
        </BrowserRouter>
      </themeContext.Provider>
    </div>
  );
}

export default App;
