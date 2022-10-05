import { useState } from "react";
import Main from "@/components/Main/Main";
import Header from "@/components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/styles/styles.css";
import { Context } from "@/context/context";

function App(): JSX.Element {
  interface categories {
    list_name: string;
  }
  [];

  const [theme, setTheme] = useState("");
  const [categories, setCategories] = useState([{}]);
  console.log(categories);

  const darkmode: string = "App" + theme;

  const toggleTheme = () => (theme === "" ? setTheme("-dark") : setTheme(""));

  const getCategories = (category: { list_name: string }[]) => {
    setCategories(category);
  };

  const data = {
    theme,
    toggleTheme,
    categories,
    getCategories,
  };

  return (
    <div className={darkmode}>
      <Context.Provider value={data}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route element={<Main />} path="/" />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
