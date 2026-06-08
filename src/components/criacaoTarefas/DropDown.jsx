
import { useEffect, useState } from 'react';

import "./DropDown.css"

function DropDown( {option1, option2, option3, onEnviar, value, parentComponentSelectedValue, setParentComponentSelectedValue} ) {

    // verifica se o dropdown esta ativo ou n e utiliza o state na classe.
    const [isAtivo, setIsAtivo] = useState(false);

    // usada para verificar a categoria escolhida de acordo com o click nas options.
    const [childComponentSelectedValue, setChildComponentSelectedValue] = useState();
    setParentComponentSelectedValue(childComponentSelectedValue);

    // a cada mudança no useState de category e ele envia o valor a props onEnviar passada pelo pai:
    // useEffect(() => {
    //     onEnviar(category);
    // }, [category, onEnviar]);

    // função executada quando clicar no input, ela controla a visibilidade do dropdwn;
    function DropDownVisibility() {
        setIsAtivo(!isAtivo);
        // setCategory("");
    }

    // função executada quando clicar em uma das opções;
    function clickOption(e) {
        // pegar valor dos atributos criados no jsx usando "dataset"
        // seta o value do input do dropdown com o valor clicado das options.
        setChildComponentSelectedValue(e.target.dataset.value);
        
        //ao clicar em option, some o dropdown(setando a classe com false(" ") ). 
        setIsAtivo(false);
    }

    // função que controla clicks fora do área do dropdown e desaparece faz desaparece-lo:
    function clicarFora(e) {
        const elementoPaiClick = (e.target).parentElement;
        const classElementPai = elementoPaiClick.className;
        if ((classElementPai).includes("containerDropDown")  || classElementPai.includes("containerOptionsDropDown")) {
            return;
        } else {
            setIsAtivo(false);
        };
        
    }

    // Executa efeitos externos do React;
    // pode limpar o efeito(função document.addEventListener) depois com o return;
    // o colchete vazio, faz ele criar a função apena uma vez;
    useEffect(() => {
        document.addEventListener('click', clicarFora);

        return () => {
            document.removeEventListener('click', clicarFora);
        }
    }, []);
  

    return (
        <div className="containerDropDown" >
            

            <input type="text" readOnly placeholder="-Selecione a categoria-" className="inputSelectDropDown" onClick={DropDownVisibility} value={childComponentSelectedValue} />

            {/* classe aplicada ou n com validação */}
            <div className={`containerOptionsDropDown ${isAtivo ? "ativo" : ""} `}>
                {/* usar data-value -> para setar o value e pegar no event */}
                <div className="option1" data-value={option1} onClick={clickOption}>{option1} </div >

                <div className="option2" data-value={option2} onClick={clickOption}>{option2}</div>

                <div className="option3" data-value={option3} onClick={clickOption}>{option3}</div>
            </div>
        </div>
    )
}

export default DropDown;