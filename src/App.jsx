import { useState } from "react";
import TaskInput from "./TaskInput"; // Importa TaskInput que está en otro archivo

function App() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = () => {
    if (texto.trim() !== "") {
      setTareas([...tareas, texto]);
      setTexto(""); // limpia el input
    }
  };

  return (
    <div>
      <h1>Lista de tareas</h1>

      <TaskInput 
        texto={texto} 
        setTexto={setTexto} 
        handleSubmit={handleSubmit} 
      />

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;