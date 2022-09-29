import cuadricula from "../../../assets/cuadricula.png";
import lista from "../../../assets/lista.png";

const ViewSelection = (props:any) => {
    
    const handleViewSquares:()=>void =()=>{
        props.view(false);
    } 

    const handleViewList:()=>void =()=>{
        props.view(true);
    }

  return (
    <div>
        <button onClick={handleViewSquares}><img src={cuadricula} alt="cuadricula" /></button>
        <button onClick={handleViewList}><img src={lista} alt="lista" /></button>
    </div>
  )
}

export default ViewSelection