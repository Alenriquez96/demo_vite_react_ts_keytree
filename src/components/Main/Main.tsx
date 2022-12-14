import { useState, useEffect } from "react";
import SearchBar from "@/components/Main/SearchBar/SearchBar";
import ViewSelection from "@/components/Main/ViewSelection/ViewSelection";
import Books from "@/components/Main/Books/Books";
import Filter from "@/components/Main/Filter/Filter";
import ScrollButton from "@/components/Main/scrollButton/scrollButton";

const Main = () => {
  const [view, setView] = useState(false);
  const [search, setSearch] = useState("");
  const [windowWidth, setWindowWidth] = useState(0);

  const detectSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    if (windowWidth <= 860) {
      setView(false);
    }

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowWidth]);

  const changeView = (option: boolean): void => {
    setView(option);
  };

  const searchInput = (title: string): void => {
    setSearch(title);
  };

  return (
    <main>
      <ScrollButton />
      <section id="formSection">
        <SearchBar data={searchInput} />
        <ViewSelection view={changeView} />
        <Filter />
      </section>
      <Books display={view} title={search} />
    </main>
  );
};

export default Main;
