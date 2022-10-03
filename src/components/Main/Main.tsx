import { useState } from "react";
import SearchBar from "@/components/Main/SearchBar/SearchBar";
import ViewSelection from "@/components/Main/ViewSelection/ViewSelection";
import Books from "@/components/Main/Books/Books";
import Filter from "@/components/Main/Filter/Filter";
import { useContext } from "react";
import { themeContext } from "@/context/themeContext";

const Main = () => {
  const [view, setView] = useState(false);
  const { theme } = useContext(themeContext);
  const darkmode: string = "main" + theme;

  const changeView = (option: boolean): void => {
    setView(option);
  };

  return (
    <main className={darkmode}>
      <section id="formSection">
        <SearchBar />
        <ViewSelection view={changeView} />
        <Filter />
      </section>
      <Books display={view} />
    </main>
  );
};

export default Main;
