import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import Cart from "../Cart/Cart";
import Mensajes from "../Mensajes/Mensajes";

function CartList() {
    const { cartList, totalPrice, empty, emptyCart } = useCartContext()

    const buy = async () => {
        let order = {}

        order.bueyer = {
            name: 'Pablo Cabrol', 
            email: 'pabloecabrol@gmail.com',
            phone: '3435132776'
        }
        order.total = totalPrice()

        order.item = cartList.map(cartItem => {
            const id = cartItem.item.id
            const title = cartItem.item.name
            const price = cartItem.item.price * cartItem.quantity
            const quantity = cartItem.quantity

            return {
                id,
                title,
                price,
                quantity
            }
        })

        const db = getFirestore()
        const orderCollection = collection(db, 'Orders')
        await addDoc(orderCollection, order)
        .then(resp => console.log(resp))
    }

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
                <button className="btn btn-primary" onClick={buy}>Crear Orden</button>
            </> : ''}
        </div>
    )
}

export default CartList