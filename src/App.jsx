
import './App.css'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([
      {
        id: 1,
        text: "Tarefa 1",
        category: 'categoria 1',
        isCompleted: false,

      },
      {
        id: 2,
        text: "Tarefa 2",
        category: "categoria 2",
        isCompleted: false,
      },
      {
        id: 3,
        text: "Tarefa 3",
        category: "categoria 3",
        isCompleted: false,

      },
  ]);

  return (
    <div className='App'>
      <main className="container">
        <h1 className='tituloApp'>Tarefas</h1>
      
      </main>
    </div>
  )
}

export default App
