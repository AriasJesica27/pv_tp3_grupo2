import { useState } from "react";

function TaskInput({ texto, setTexto, agregarTarea }) {
  return (
    <div>
      <input type="text" value={texto} placeholder="Nueva Tarea" onChange={(e) => setTexto(e.target.value)}/>
      
      <button onClick={agregarTarea}>Agregar</button>
    </div>
  );
}
 
export default TaskInput;