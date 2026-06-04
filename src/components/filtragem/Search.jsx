import './Search.css'

function Search({ inputSearch, setInputSearch , searchTarefa2 }) { 

    return (
        <div className="containerSearch">
            <input className="inputSearch" type="text" placeholder="Pesquisar" onChange={(e) => {
                //  para enviar valor do state inputSearch, envie como parametro da função
                 searchTarefa2(e);
            }} />
        </div>
    )
}

export default Search;