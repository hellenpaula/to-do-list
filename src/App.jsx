
import './App.css'
import { useEffect, useState } from 'react'

// components
import Todo from './components/tarefas/Todo';

import TodoForm from './components/criacaoTarefas/TodoForm';

import Search from './components/filtragem/Search';

function App() {
  // todo padrão:
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
  
  const [inputSearch, setInputSearch] = useState(""); 

  // todo utilizado para o search:
  const [todosSearch, setTodosSearch] = useState(todos);

  const [todoButtonsClicked, setTodoButtonsClicked] = useState("");

  const [ButtonClicked, setButtonClicked] = useState(false);


  // state é enviado como parâmetro da função e enviado assim que houver mudança no state com "onChange", que chama a função.
  
    console.log(todosSearch);
  const todoInicial = todos.filter((todo) => {
    return todo;
  })

  function searchTarefa(e) {

    const constInputSearch = e.target.value;
   
        
        if(ButtonClicked === true) {
          const newArray = todoButtonsClicked;
          setTodosSearch(todoButtonsClicked);
        }

        const newArray = todos.filter((todo) => {
         console.log(typeof constInputSearch.length);
         console.log(todos);
          
         let tituloLowerCase = (todo.text).toLowerCase();

         console.log(todo);

          if(((todo.text).toLowerCase()).includes(constInputSearch) == true){
          return todo;

          } else {
            // "retorna nada"
          }

          });

          setTodosSearch(newArray);
          console.log(newArray);
    
  }
  
console.log(todosSearch);

  return (
    <div className='App'>
      <main className="container">
        <h1 className='tituloApp'>Tarefas</h1>

        <Search inputSearch={inputSearch} setInputSearch={setInputSearch} searchTarefa2={searchTarefa}/>
        

        {/* Area das tarefas */}
        <div className="containerAreaTarefas">
          <h2 className="tituloAreaTarefas">Tarefas Atuais</h2>

        {/* mapeia o array de objetos e pega os elementos de cada posição e envia ao componente Todo para aplicar na estrutura de tarefas */}
          <div className="todo-list">

          
          {/* todos ou todosSearch, todosSearch está parando o complete e remove */}
            {todosSearch.map((todo) => (
              
              <Todo   id={todo.id} todo={todo} todos={todosSearch} setTodosSearch={setTodosSearch} setTodoButtonsClicked={setTodoButtonsClicked} setButtonClicked={setButtonClicked} ButtonClicked={ButtonClicked} setTodos={setTodos}/>
              
            ))

            }
          </div>

        </div>

        <TodoForm todos={todosSearch} setTodos={setTodosSearch}/>
        
      </main>
    </div>
  )
}

export default App
