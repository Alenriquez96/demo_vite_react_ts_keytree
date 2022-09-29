import React, { useState } from 'react';
import lupa from "../../../assets/lupa.png";
import eliminar from "../../../assets/eliminar.png";


const SearchBar:()=>JSX.Element = () => {
    const [book, setBook] = useState("");
    const [text, setText] = useState("");        
    

    const handleSubmit:(e:any)=>void = (e) =>{
        e.preventDefault();
        setBook(e.target.book.value);
    }    

    const handleText:()=>void =()=>{
      let inpField:any = document.querySelector("#searchBar > input[type=text]");
       setText("");
       inpField!.value="";
    }

  return (
    <form  onSubmit={handleSubmit}id='searchBar'>
        <button><img src={lupa} alt="lupa" /></button>
        <input onChange={(e)=>{
          setText(e.target.value)
          }} name='book' type="text" placeholder='Type title, author, genre, editor, publisher...'/>
        {text!==""?<button onClick={handleText}><img src={eliminar} alt="eliminar texto" /></button>:""}
    </form>
  )
}

export default SearchBar