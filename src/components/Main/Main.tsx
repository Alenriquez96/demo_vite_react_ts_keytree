import React,{ useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ViewSelection from './ViewSelection/ViewSelection';
import Books from './Books/Books';
import Filter from './Filter/Filter';

const Main = () => {
  const [view, setView] = useState(true);

  const changeView = (option:boolean) =>{
    setView(option);
  }

  return (
    <main>
      <section id='formSection'>
        <SearchBar/>
        <ViewSelection view={changeView}/>
        <Filter/>
      </section>
      <Books/>
    </main>
  )
}

export default Main