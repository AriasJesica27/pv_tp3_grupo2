import { use, useState } from "react";


 
function TaskInput (props) {
    const [texto,setTexto]=props.elemento;
   
    return (
      <div>
           
          <input type="text" value={texto} placeholder="Nueva Tarea" onChange={e => setTexto(e.target.value)}></input>
          <button>Agregar</button>
          
      </div>
    )
 
  }
 
export default TaskInput;