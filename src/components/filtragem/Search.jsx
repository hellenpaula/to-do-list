import './Search.css'




function Search({ inputSearch, setInputSearch , searchTarefa2 }) { 


    // function changeNoInput(e) {
    //     setInputSearch(e.target.value);
    //     searchTarefa();
    // }

    return (
        <div className="containerSearch">
            <input className="inputSearch" type="text" placeholder="Pesquisar" onChange={(e) => {
                //   setInputSearch(e.target.value);
                //  console.log(`valor digitaddo: ${e.target.value}`); 
                //  para enviar valor do state inputSearch, envie como parametro da função
                 searchTarefa2(e);
            }} />
        </div>
    )
}

export default Search;