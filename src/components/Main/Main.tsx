import React,{ useState } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ViewSelection from './ViewSelection/ViewSelection';
import Books from './Books/Books';
import Filter from './Filter/Filter';
import { useContext } from 'react';
import { themeContext } from '../../context/themeContext';


const Main = () => {
  const [view, setView] = useState(false);  
  const {theme} = useContext(themeContext);
  const darkmode:string = "main"+theme;

  const changeView = (option:boolean):void =>{
    setView(option);
  }

  return (
    <main className={darkmode}>
      <section id='formSection'>
        <SearchBar/>
        <ViewSelection view={changeView}/>
        <Filter/>
      </section>
      <Books display={view}/>
    </main>
  )
}

export default Main