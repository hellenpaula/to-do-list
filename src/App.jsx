
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

  // setTodos(todos);
  
  const [inputSearch, setInputSearch] = useState(""); 

  // todo utilizado para o search:
  const [todosSearch, setTodosSearch] = useState(todos);

  const [todoButtonsClicked, setTodoButtonsClicked] = useState("");

  const [ButtonClicked, setButtonClicked] = useState(false);
  // console.log(todosSearch);

  console.log(ButtonClicked);
  // state é enviado como parâmetro da função e enviado assim que houver mudança no state com "onChange", que chama a função.
  // const todoInicial = todos.map((todo) => {
  //   // if(todo) {
  //     console.log(`item todo inicial: ${todo}`);
  //     // return todo;
      
    console.log(todosSearch);
  // });
  const todoInicial = todos.filter((todo) => {
    return todo;
  })
  // const todoInicial2 = todoInicial.map((todo) => {
  //   console.log(`Elemento todo inicial: ${todo}`);
  // })
  // console.log(`Todo inicial: ${todoInicial2}`);

  // setTodos(todoInicial2);

  function searchTarefa(e) {

    // console.log("dentro da função");
    const constInputSearch = e.target.value;
    console.log("tipo dado: " + typeof constInputSearch)
    // if(constInputSearch.length == 0 ) {
    //   setTodosSearch(todos);
    // } else {
      console.log(todoInicial);
   
    // const newArray = todos.filter((todo) => {
      // condicional:
      

      // useEffect(() => {
        
        if(ButtonClicked === true) {
          const newArray = todoButtonsClicked;
          setTodosSearch(todoButtonsClicked);
        }/*  else { */

          const newArray = todos.filter((todo) => {
         console.log(typeof constInputSearch.length);
         console.log(todos);
          
         let tituloLowerCase = (todo.text).toLowerCase();

         console.log(todo);

          if(((todo.text).toLowerCase()).includes(constInputSearch) == true){
          return todo;

          } else {
            // return todoInicial;
            
          }

          });

          setTodosSearch(newArray);
          console.log(newArray);
        
    
        
      // },[todoButtonsClicked]);


      // if(constInputSearch.length == 0 ) {
      //   const newArray = todoButtonsClicked;
      //   // setTodosSearch(todoButtonsClicked);
      //   console.log(todoButtonsClicked);
// -------------------------------------------------
       
    //   {newArray.map((todo) => {
    //     <Todo id={todo.id} todo={todo} todos={newArray} setTodos={setTodos}/>
    // })}
        // setTodos(newArray);

      // condicional:
      // } else {

      
  //     const newArray = todos.filter((todo) => {
  //        console.log(typeof constInputSearch.length);
  //        console.log(todos);
  //     // console.log(`dentro do filter: ${e.target.value}`);
      
  //     // console.log(`dentro do filter, após envio por função: ${constInputSearch}`);
  //     let tituloLowerCase = (todo.text).toLowerCase();
      
  //     // console.log(tituloLowerCase.includes(constInputSearch) == true);
  //     console.log(todo);

  //     // condicional certa:
  //     // if(todo){
  //     //   return ((todo.text).toLowerCase()).includes(constInputSearch) == true;
  //     // } else {
  //     //   return todoInicial;
  //     // }
      

  //     if(((todo.text).toLowerCase()).includes(constInputSearch) == true){
  //       return todo;

  //     } else {
  //       // return todoInicial;
        
  //     }
      
     
  //     // if(tituloLowerCase.includes(constInputSearch) == true) {
        
  //     //   return todo;
  //     //   // setTodosSearch(todo);

  //     // } else if (constInputSearch == "") {
  //     //   // setTodosSearch(todos);
  //     //   return todos;
  //     // } else {
  //     //   return "";
  //     //   // setTodosSearch("");
  //     // }


  //     // setTodos(todoInicial);

  //     //  const tituloLowerCase = (todo.text).toLowerCase();
  //     //  console.log(tituloLowerCase);
  //     //  console.log("inputSearch: " + inputSearch);
  //     // console.log(tituloLowerCase.includes(inputSearch));
  //     // console.log(todo.id);
  //     // tituloLowerCase.includes(inputSearch) === true;
      
  //   //   console.log((todo.text).includes(inputSearch) === true);
  //   //     c
  //   //  le.log((todo.text).includes(inputSearch) === true);
  //   //  console.log(newArray);
    
  //   });
  //   // console.log(newArray);
  //   // setTodos(newArray);
  // //   const componentTodoHTML =document.querySelector(".todo-list");
  // // console.log(componentTodoHTML);
   

  // // componentTodoHTML.innerHTML("");
  // //   componentTodoHTML.createElement()

  // // componentTodoHTML.createElement(
  // //   {newArray.map((todo) => (
  // //             <Todo   id={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
  // //           ))}
  // //   )
  
  // //   {newArray.map((todo) => {
  // //       <Todo id={todo.id} todo={todo} todos={newArray} setTodos={setTodos}/>
  // //   })
  // // }
  // setTodosSearch(newArray);
  // console.log(newArray);
  // }
    

  //   //  newArray;
  //   console.log(todoInicial);
  //   // setTodos(newArray);
    
    
  //   // setTodos(newArray);
    
  //   //  }
  //   // console.log(todos.includes(inputSearch));
  //   // setTodosSearch(newArray);
  //   // if(constInputSearch == "") {
  //   //   // setTodos(newArray);
    //   setTodos(todos);
    // } else {
       
    
    // todos = newArray;
    // console.log(newArray);
  
  }
  
console.log(todosSearch);
// console.log(newTodos);
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
