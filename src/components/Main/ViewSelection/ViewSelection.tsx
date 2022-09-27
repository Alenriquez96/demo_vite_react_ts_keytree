import cuadricula from "../../../assets/cuadricula.png";
import lista from "../../../assets/lista.png";

const ViewSelection = (props:any) => {
    
  return (
    <div>
        <button><img src={cuadricula} alt="cuadricula" /></button>
        <button><img src={lista} alt="lista" /></button>
    </div>
  )
}

export default ViewSelection