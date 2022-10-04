import { useState } from "react";
import SearchBar from "@/components/Main/SearchBar/SearchBar";
import ViewSelection from "@/components/Main/ViewSelection/ViewSelection";
import Books from "@/components/Main/Books/Books";
import Filter from "@/components/Main/Filter/Filter";

const Main = () => {
  const [view, setView] = useState(false);
  const [search, setSearch] = useState("");

  const changeView = (option: boolean): void => {
    setView(option);
  };

  const searchInput = (title: string): void => {
    setSearch(title);
  };

  return (
    <main>
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
