import { createContext, useState, useContext } from "react";

const cartContext = createContext([])

export function useCartContext() { return useContext(cartContext) }

//crear un componente

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);
    const [empty, setEmpty] = useState(true)
    //
    function addToCart(prod) {
        if (unique(prod)) {
            // hacemos una copia del estado cartList
            const copyCartList = [...cartList]
            copyCartList.forEach((i) => {
                if (i.item.id === prod.item.id) {
                    i.quantity = i.quantity + prod.quantity
                }
            })
            // reeemplazo la cartlIst por su copia actualizada
            return setCartList(copyCartList)
            
        }
        // si no hay duplicados agrego el producto nuevo
        setEmpty(false)
        return setCartList([...cartList, prod])
    }

    // declaramos una funcion que detecta la existencia de un elemento en un array.
    const unique = (element) => {
        const findProduct = cartList.find((x) => {
            return x.item.id === element.item.id
        })
        return findProduct
    }
    // funcion de vaciar carrito
    function emptyCart() {
        setCartList([])
        setEmpty(true)
    }

    // funcion de calcular el precio total de los producto
    const totalPrice = () => {
        const totalCartList = [...cartList]
        let totalPrice = 0
        totalCartList.forEach(x => {
            totalPrice = totalPrice + (x.item.price * x.quantity)
        })
        return totalPrice
    }

    // funcion para contar los items de un carrito
    const howMany = () => {
        const quantCartList = [...cartList]
        let totalcant = 0
        quantCartList.forEach(x => {
            totalcant = totalcant + x.quantity
        })
        return totalcant
    }

    // funcion para eliminar un producto de la lista
    const removeFromCart = (v) => {
        const newCartList = cartList.filter(e => e.item.id !== v)
        if (newCartList.length === 0) {
            setEmpty(true)
        }
        return setCartList(newCartList)
    }

    return <cartContext.Provider value={{
        cartList,
        addToCart,
        emptyCart,
        totalPrice,
        howMany,
        removeFromCart,
        empty
    }} >
        {children}
    </cartContext.Provider>;
}

export default CartContextProvider;