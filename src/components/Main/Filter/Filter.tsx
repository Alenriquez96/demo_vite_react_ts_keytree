import filter from "../../../assets/settings.png";
import Popup from 'reactjs-popup';
import price from "../../../assets/price.png";
import { useState } from "react";

const Filter = () => {
 
  return (
    <Popup
      trigger={<button style={{background:"none"}}><img src={filter} alt="filters" /></button>}
      position="bottom center"
      nested
    >
      <div style={{display:"flex", alignItems:"center"}}>
        <img src={price} alt="price" />
        <p style={{color:"#637ACC", fontSize:"12px"}}>Price</p>
      </div>

      <div>
        <input type="checkbox" />
        <label htmlFor="">Self Help</label>
      </div>
      <div>
        <input type="checkbox" />
        <label htmlFor="">Comedy</label>
      </div>
      <div>
        <input type="checkbox" />
        <label htmlFor="">History</label>
      </div>
    </Popup>
  )
}

export default Filter