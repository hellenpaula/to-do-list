
import "./Todo.css";

function Todo( {todo} ) {
    return (
        <div className="todo">
            <div className="content">
                <p className="tituloTarefa">{todo.text}</p>
                <p className="categoriaTarefa">{todo.text}</p>
            </div>

            <div className="buttons">
                <button className="completed">Completar</button>
                <button className="remove">X</button>
            </div>
        </div>
    )
}

export default Todo;