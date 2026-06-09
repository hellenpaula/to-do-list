
import './Order.css';

function Order({ascendingOrder, descendingOrder, verificationButtonParent}) {

    // function verificationButton(e) {
    //     console.log(e.target.value);
    //     if (e.target.value === "Crescente") {
    //         ascendingOrder(e);
    //     } else {
    //         descendingOrder();
    //     }
    // }


    return (
        <div className="containerOrder">
            <h2 className="tituloAreaOrder">Ordem Alfabética</h2>

            <div className="containerOrderButtons">
                <button className="orderButton crescenteButton" onClick={(e) => {
                    verificationButtonParent(e);
                    // console.log(e);
                }}
                value={"Crescente"}>Crescente</button>

                <button className="orderButton descrescenteButton" onClick={(e) =>{
                    verificationButtonParent(e);
                    // console.log(e);
                }}
                value={"Decrescente"}>Decrescente</button>
            </div>
        </div>
    )
}

export default Order;