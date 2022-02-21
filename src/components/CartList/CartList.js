import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import Cart from "../Cart/Cart";
import Messages from "../Messages/Messages";
import { generatePath, useNavigate } from 'react-router';
import { useState } from "react";

function CartList() {
    const { cartList, totalPrice, empty, emptyCart, howMany } = useCartContext()
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        name: ''
    })
    // Defino una forma de navegar a una url definida
    const navigate = useNavigate();

    // Creo una funcion de compra
    const buy = async (e) => {
        e.preventDefault()

        let order = {}

        order.buyer = formData
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
            .then(resp => showOrderId(resp.id))
            .catch(err => console.log(err))
            .finally(() => {
                // muestra un alert con el id de la orden creada y luesog borra el carrito
                emptyCart()
            }
            )

        const queryCollection = collection(db, 'Items')


        const queryStockUpdate = query(
            queryCollection,
            where(documentId(), 'in', cartList.map(it => it.item.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryStockUpdate)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.item.id === res.id).quantity
            })
            ))
            .catch(err => console.log(err))
            .finally(() => {
                setFormData({
                    email: '',
                    phone: '',
                    name: ''
                })
                emptyCart()
            })
        batch.commit()

    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }


    const showOrderId = (id) => {
        navigate(generatePath('/order/:idOrder', { idOrder: id }));

    }

    return (
        <div className="container">
            {!empty ? <>
                <div class="row g-5">
                    <div class="col-md-5 col-lg-4 order-md-last">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-primary">Tu Carrito</span>
                            <span class="badge bg-primary rounded-pill text-light ">{howMany()}</span>
                        </h4>
                        <ul class="list-group mb-3">
                            {cartList.map((prod, i) =>
                                <Cart {...prod} key={i} />
                            )}
                            <li class="list-group-item d-flex justify-content-between">
                                <span>Total</span>
                                <strong>{totalPrice()} $</strong>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-7 col-lg-8">
                        <h4 class="mb-3">Datos Personales</h4>
                        <form className="card p-2" onSubmit={buy}>
                            <div class="row g-3">
                                <div class="col-12">
                                    <label for="name" className="form-label">Nombre</label>
                                    <input
                                        className="form-control"
                                        type='text'
                                        name='name'
                                        placeholder='name'
                                        onChange={handleChange}
                                        value={formData.name}
                                    />
                                </div>
                                <div class="col-12">
                                    <label for="phone" className="form-label">Teléfono</label>
                                    <input
                                        className="form-control"
                                        type='number'
                                        name='phone'
                                        placeholder='tel'
                                        onChange={handleChange}
                                        value={formData.phone}
                                    />
                                </div>
                                <div class="col-sm-6">
                                    <label for="email" className="form-label">Email</label>
                                    <input
                                        className="form-control"
                                        type='email'
                                        name='email'
                                        placeholder='email'
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                </div>
                                <div class="col-sm-6">
                                    <label for="validarEmail" className="form-label">Reingrese email</label>
                                    <input
                                        className="form-control"
                                        type='email'
                                        name='validarEmail'
                                        placeholder='Repetir Email'
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <br />
                            <button className="btn btn-primary" onClick={buy}>Crear Orden</button>
                        </form>
                    </div>
                </div>

            </>
                :
                <Messages />
            }
            {!empty ? <>
                <br />
                <Link className="btn btn-primary" to='/'>Continuar Comprando</Link>
                <button className="btn btn-primary" onClick={emptyCart}>Vaciar carrito</button>
            </> : ''}
            {

            }
        </div>
    )
}

export default CartList