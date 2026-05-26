

import DropDown from "./DropDown";

import "./TodoForm.css";


function TodoForm() {

    function clickButtonCriar(e) {
        e.preventDefault();
    }
  


    return (
        <div className="containerCriacaoTarefas">
            <h2 className="tituloAreaCriacaoTarefas">Criar Tarefas</h2>
            <p className="descricaoAreaCriacaoTarefas">
            Crie aqui suas tarefas
            </p>

            <form className="todoForm">
                <input type="text" className="inputTitulo" placeholder="Titulo" />

                

                <DropDown option1={"Trabalho"} option2={"Estudo"} option3={"Pessoal"} />

                <button type="submit" className="buttonForm" onClick={clickButtonCriar}>
                    Criar
                </button>
            </form>
        </div>
    )
}

export default TodoForm;