function App() {
  const [texto,setTexto]= useState("");
  return (
    <div>
      <h1>Lista de tareas</h1>
      <TaskInput elemento={[texto,setTexto]}></TaskInput>
        
    </div>
  );
}

export default App;
