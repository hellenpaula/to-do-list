import { useState } from 'react';

import DropDown from "./DropDown";

import "./TodoForm.css";


function TodoForm( {addTodo} ) {

    const [tituloTarefa, setTituloTarefa] = useState("");

    const [category, setCategory] = useState("");


    // função que recebe useState category do filho(dropdown);
    function receberCategoryDoFilho(valorDoFilho) {
        setCategory(valorDoFilho);
    }

    function clickButtonCriar(e) {
        // previne o envio ao back
        e.preventDefault();

        // se o titulo ou a categoria estiverem vazias, retorne nada
        console.log(tituloTarefa);
        console.log(category);
        if(!tituloTarefa || !category) return;
        
            // console.log("enviado");
            // chama função criada em app com os valores do states
            addTodo(tituloTarefa, category);
            setCategory("");
            setTituloTarefa("");
        

        
        // senao, adicione a tarefa a lista, remova os valores dos campos
    }
  


    return (
        <div className="containerCriacaoTarefas">
            <h2 className="tituloAreaCriacaoTarefas">Criar Tarefas</h2>
            <p className="descricaoAreaCriacaoTarefas">
            Crie aqui suas tarefas
            </p>

            <form className="todoForm" onSubmit={clickButtonCriar}>
                <input type="text" className="inputTitulo" placeholder="Titulo"
                value={tituloTarefa}
                onChange={(e) => (
                    setTituloTarefa(e.target.value)
                )}/>

                

                <DropDown option1={"Trabalho"} option2={"Estudo"} option3={"Pessoal"} value={category}
                // envia como props a função q recebe valor do filho:
                onEnviar={receberCategoryDoFilho} />


                <button type="submit" className="buttonForm" >
                    Criar
                </button>
            </form>
        </div>
    )
}

export default TodoForm;