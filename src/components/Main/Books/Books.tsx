import { useEffect, useState } from "react";
import Book from "./Book/Book";

const books = (props:any) => {
    const [books, setBooks] = useState([]);
    
    
    useEffect(() => {
        const httpReq = async() =>{
            try {
                let res = await fetch("https://api.nytimes.com/svc/books/v3/lists/series-books.json?api-key=U5XodN0WD6AxEelHTmcyeksK5nC8On22");
                let data = await res.json();
                setBooks(data.results);
            } catch (error) {
                console.log(error);
            }
        }
        httpReq();
    }, [])
    

    let view:boolean = props.display;
    
    const handleSelection =()=>{
        if (view===true) {
            return <section id='books' style={{display: "flex"}}>
                {books.map((book:object,i:number)=><Book key={i} data={book}/>)}
            </section>
            } else {
            return <section id='books'>
                {books.map((book:object,i:number)=><Book key={i} data={book}/>)}
            </section>
        }
    }

  return (
    // <div>
    //     {view===true?<section id='books' style={{display: "flex"}}>
    //              {books.map(book=><Book data={book}/>)}
    //          </section>:
    //          <section id='books'>books</section>}
    // </div>
    <div style={{display: "flex", flexWrap:"wrap", justifyContent:"space-evenly", alignItems:"center"}}>
        {/* {handleSelection()} */}
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </div>
  )
}

export default books