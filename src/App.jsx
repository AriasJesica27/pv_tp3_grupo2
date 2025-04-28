import { useState } from "react";
import TaskInput from "./TaskInput"; 
import TaskList from "./TaskList";

function App() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([]);

  const agregarT = () => {
    if (texto.trim() !== "") {
      setTareas([...tareas, texto]);
      setTexto("");
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskInput texto={texto} setTexto={setTexto} agregarTarea={agregarT} />
      <TaskList tareas={tareas} /> {/* <-- Aquí mostramos la lista */}
    </div>
  );
}

export default App;