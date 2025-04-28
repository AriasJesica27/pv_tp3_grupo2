import TaskItem from "./TaskItem";

function TaskList({ tareas, handleToggle, handleEliminar }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <TaskItem
          key={tarea.id}
          tarea={tarea}
          handleToggle={handleToggle}
          handleEliminar={handleEliminar}
        />
      ))}
    </ul>
  );
}

export default TaskList;