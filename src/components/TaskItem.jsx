function TaskItem({ tarea, handleToggle, handleEliminar }) {
    return (
      <li>
        <span style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
          {tarea.texto}
        </span>
        <button onClick={() => handleToggle(tarea.id)}>
          {tarea.completada ? "Desmarcar" : "Realizada"}
        </button>
        <button onClick={() => handleEliminar(tarea.id)}>Eliminar</button>
      </li>
    );
  }
  
  export default TaskItem;