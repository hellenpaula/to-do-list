
import "./Todo.css";

function Todo( {todo, key, removed} ) {


    return (
        <div className="todo"  key={key}>
            <div className="content">
                <p className="tituloTarefa">{todo.text}</p>
                <p className="categoriaTarefa">{todo.text}</p>
            </div>

            <div className="buttons">
                <button className="completed" key={key} >Completar</button>
                <button className="remove" onClick={() => removed(todo.id)}>X</button>
            </div>
        </div>
    )
}

export default Todo;