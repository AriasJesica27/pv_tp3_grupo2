function TaskInput({ texto, setTexto, handleSubmit }) {
  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={handleSubmit}>Agregar</button>
    </div>
  );
}

export default TaskInput;