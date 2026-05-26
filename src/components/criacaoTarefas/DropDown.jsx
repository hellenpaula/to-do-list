
import { useEffect, useState } from 'react';

import "./DropDown.css"

function DropDown( {option1, option2, option3, onEnviar, value} ) {

    // verifica se o dropdown esta ativo ou n e utiliza o state na classe.
    const [isAtivo, setIsAtivo] = useState(false);

    // usada para verificar a categoria escolhida de acordo com o click nas options.
    const [category, setCategory] = useState();

    // a cada mudança no useState de category e ele envia o valor a props onEnviar passada pelo pai:
    useEffect(() => {
        onEnviar(category);
    }, [category, onEnviar]);

    function DropDownVisibility() {
        setIsAtivo(!isAtivo);
        // setCategory("");
    }


    function clickOption(e) {
        // pegar valor dos atributos criados no jsx usando "dataset"
        // seta o value do input do dropdown com o valor clicado das options.
        setCategory(e.target.dataset.value);
        
        //ao clicar em option, some o dropdown(setando a classe com false(" ") ). 
        setIsAtivo(false);
    }

    return (
        <div className="containerDropDown">
            
            {/* <select className="dropdown">
                <option value="" className="option1">{option1}</option>
                <option value="" className="option2">{option2}</option>
                <option value="" className="option3">{option3}</option>
                <option value="" className="option4">{option4}</option>
            </select> */}

            <input type="text" readOnly placeholder="-Selecione a categoria-" className="inputSelectDropDown" onClick={DropDownVisibility} value={value} />
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