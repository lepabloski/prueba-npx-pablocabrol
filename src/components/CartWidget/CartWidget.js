import React from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useCartContext } from '../../context/cartContext'

function CartWidget() {
    const { howMany } = useCartContext()
    return (
        <>
            <span className="badge rounded-pill">
                {howMany() ? howMany() : ''}
            </span>
            <FontAwesomeIcon className="ShoppingCar" icon={faShoppingCart} />

        </>

    )
}

export default CartWidget