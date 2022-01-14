import React from 'react'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function CartWidget() {
    return (
            <FontAwesomeIcon className="ShoppingCar"  icon={faShoppingCart} />
    )
}

export default CartWidget
