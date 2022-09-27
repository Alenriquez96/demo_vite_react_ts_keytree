import React from 'react'

const books = (props:any) => {
    let view:boolean = props.display;
    console.log(view);
    
    const handleSelection =()=>{
        if (view===true) {
            return <section id='books' style={{display: "flex"}}>books</section>
        } else {
            return <section id='books'>books</section>
        }
    }

  return (
    <div>{handleSelection()}</div>
  )
}

export default books