import { useState } from 'react';

import DropDown from "./DropDown";

import "./TodoForm.css";


function TodoForm( {todos, setTodos, todosSearch, setTodosSearch} ) {

    const [tituloTarefa, setTituloTarefa] = useState("");

    const [category, setCategory] = useState("");

    function validacaoInputs(e) {
        e.preventDefault();
        console.log("Clicou");
        // ao submeter ele seta category com o valor enviado como props pelo filho "dropdown";

        // validação de campos:
        !tituloTarefa || !category ? "" : criarTarefa();
        
        
    }

    // função para criar novas tarefas 
    function criarTarefa() {
        const newTodos = [...todos,
            {
                id: Math.floor(Math.random() * 10000),
                text: tituloTarefa,
                category: category,
                isCompleted: false,
            },
        ];
        console.log(newTodos);
        setTodos(newTodos);
        setTodosSearch(newTodos);
        
        console.log(todos);
    }
    

    return (
        <div className="containerCriacaoTarefas">
            <h2 className="tituloAreaCriacaoTarefas">Criar Tarefas</h2>
            <p className="descricaoAreaCriacaoTarefas">
            Crie aqui suas tarefas
            </p>

            <form className="todoForm" onSubmit={validacaoInputs} >
                <input type="text" className="inputTitulo" placeholder="Titulo"  onChange={(e) => setTituloTarefa(e.target.value)} /> 

                

                <DropDown option1={"Trabalho"} option2={"Estudo"} option3={"Pessoal"} placeholder={"-Selecione a categoria-"} value={category} parentComponentSelectedValue={category} setParentComponentSelectedValue={setCategory}
                // envia como props a função q recebe valor do filho:
                />


                <button type="submit" className="buttonForm" >
                    Criar
                </button>
            </form>
        </div>
    )
}

export default TodoForm;