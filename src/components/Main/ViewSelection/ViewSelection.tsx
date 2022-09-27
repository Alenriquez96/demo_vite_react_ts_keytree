import cuadricula from "../../../assets/cuadricula.png";
import lista from "../../../assets/lista.png";

const ViewSelection = (props:any) => {
    
    const handleViewSquares =()=>{
        props.view(false);
    }

    const handleViewList =()=>{
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