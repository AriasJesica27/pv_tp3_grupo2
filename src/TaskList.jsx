import { useState } from "react";

function TaskList({ tareas }) {
    return (
      <div>
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}> {tarea} </li> ))}
        </ul>
      </div>
    );
  }
  
  export default TaskList;
  