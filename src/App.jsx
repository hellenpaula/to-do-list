
import './App.css'
import { useState } from 'react'

// components
import Todo from './components/tarefas/Todo';


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

  function removed(id) {
    const newTodos = [...todos];
    console.log(newTodos);

    const filteredTodos = newTodos.filter((todo) => {
      if(todo.id === id) {
        null;
      } else {
        return todo;
      }
      console.log(todo);
      console.log(id);
    })
    setTodos(filteredTodos);
    console.log(filteredTodos);
    
  }


  return (
    <div className='App'>
      <main className="container">
        <h1 className='tituloApp'>Tarefas</h1>

        {/* Area das tarefas */}
        <div className="containerAreaTarefas">
          <h2 className="tituloAreaTarefas">Tarefas Atuais</h2>

        {/* mapeia o array de objetos e pega os elementos de cada posição e envia ao componente Todo para aplicar na estrutura de tarefas */}
          <div className="todo-list">
            {todos
            .map((todo) => (
              <Todo key={todo.id} todo={todo} removed={removed} />
            ))}
          </div>

        </div>
        
      </main>
    </div>
  )
}

export default App
