import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import Cart from "../Cart/Cart";
import Mensajes from "../Mensajes/Mensajes";

function CartList() {
    const { cartList, totalPrice, empty, emptyCart } = useCartContext()
    return (
        <div className="container">
            {!empty ?
                cartList.map((prod) =>
                    <Cart {...prod} />
                ) :
                <Mensajes/>
            }
            {!empty ? <>
                <br />
                <h2>Precio total {totalPrice()} Pesos</h2>
                <Link className="btn btn-primary" to='/'>Continuar Comprando</Link>
                <button className="btn btn-primary" onClick={emptyCart}>Vaciar carrito</button>
            </> : ''}
        </div>
    )
}

export default CartList