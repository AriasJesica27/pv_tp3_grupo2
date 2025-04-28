import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

function App() {
  const [texto, setTexto] = useState("");
  const [tareas, setTareas] = useState([]);

  const handleSubmit = () => {
    if (texto.trim() !== "") {
      setTareas([...tareas, { id: Date.now(), texto, completada: false }]);
      setTexto("");
    }
  };

  const handleToggle = (id) => {
    setTareas(tareas.map(t => t.id === id ? { ...t, completada: !t.completada } : t));
  };

  const handleEliminar = (id) => {
    setTareas(tareas.filter(t => t.id !== id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de tareas</h1>
      <TaskInput texto={texto} setTexto={setTexto} handleSubmit={handleSubmit} />
      <TaskList tareas={tareas} handleToggle={handleToggle} handleEliminar={handleEliminar} />
    </div>
  );
}

export default App;