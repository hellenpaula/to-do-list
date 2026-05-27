import { useState } from 'react';

import DropDown from "./DropDown";

import "./TodoForm.css";


function TodoForm( ) {


    const [category, setCategory] = useState("");




    return (
        <div className="containerCriacaoTarefas">
            <h2 className="tituloAreaCriacaoTarefas">Criar Tarefas</h2>
            <p className="descricaoAreaCriacaoTarefas">
            Crie aqui suas tarefas
            </p>

            <form className="todoForm" >
                <input type="text" className="inputTitulo" placeholder="Titulo"/>

                

                <DropDown option1={"Trabalho"} option2={"Estudo"} option3={"Pessoal"} value={category}
                // envia como props a função q recebe valor do filho:
                /* onEnviar={receberCategoryDoFilho}  *//>


                <button type="submit" className="buttonForm" >
                    Criar
                </button>
            </form>
        </div>
    )
}

export default TodoForm;