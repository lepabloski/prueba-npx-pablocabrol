import React from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCartContext } from '../../context/cartContext'

function CartWidget() {
    const { cantidadItemsCarrito } = useCartContext()
    return (
        <>
            <span class="badge rounded-pill">
                {cantidadItemsCarrito()}
            </span>
            <FontAwesomeIcon className="ShoppingCar" icon={faShoppingCart} />

        </>

    )
}

export default CartWidget