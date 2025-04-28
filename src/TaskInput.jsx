import { use, useState } from "react";

function TaskInput({ texto, setTexto, handleSubmit }) {
  return (
    <div>
      <input type="text" value={texto} placeholder="Nueva Tarea" onChange={(e) => setTexto(e.target.value)}/>
      
      <button onClick={handleSubmit}>Agregar</button>
    </div>
  );
}
 
export default TaskInput;