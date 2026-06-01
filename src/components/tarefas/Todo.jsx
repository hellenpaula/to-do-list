
import "./Todo.css";

function Todo( {todo, id, todos, setTodos} ) {

    // lógica botão x;
    function removedTarefa(e) {
        const idButton = Number(e.target.id);
        
        const newTodos = todos.filter((todo) => {
            if(idButton === todo.id) {
                console.log("foi clicado");
                return null;

            } else {
                console.log("n foi clicado");
                return todo;
            }
        })
        setTodos(newTodos);

    }

    // lógica do botão completed:
    function completedTarefa(e) {
        console.log(e.target.id);
        console.log(e.target);
        const idButton = Number(e.target.id);
        const newTodos = todos.filter((todo) => {
            if(idButton === todo.id) {
                todo.isCompleted = !todo.isCompleted;
                return todo;
                
            } else {
                return todo;
            };
        })
        console.log(newTodos);
        setTodos(newTodos);
    }


    return (
        <div className="todo" >
            <div className="content">
                {/* lógica para aplicar classe completed */}
                <p className={`tituloTarefa ${todo.isCompleted ? "tarefaCompleted" : ""}` }>{todo.text}</p>
                <p className="categoriaTarefa">{todo.category}</p>
            </div>

            <div className="buttons">
                <button className="completed" id={todo.id} onClick={completedTarefa}>Completar</button>
                <button className="remove" id={todo.id} onClick={removedTarefa} >X</button>
            </div>
        </div>
    )
}

export default Todo;