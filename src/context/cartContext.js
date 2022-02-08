import { createContext, useState, useContext } from "react";

const cartContext = createContext([])

export function useCartContext() { return useContext(cartContext) }

//crear un componente

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0);
    //
    function agregarAlCarro(prod) {
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
    function vaciarCarrito() {
        setCartList([])
    }

    // funcion de calcular el precio total de los producto
    const precioTotal = () => {
        const totalCartList = [...cartList]
        let totalPrice = 0
        totalCartList.forEach(x => {
            totalPrice = totalPrice + (x.item.price * x.quantity)
        })
        return totalPrice
    }
    
    // funcion para contar los items de un carrito
    const cantidadItemsCarrito = () => {
        const cantCartList = [...cartList]
        let totalcant = 0
        cantCartList.forEach(x => {
            totalcant = totalcant + x.quantity
        })
        return totalcant
    }

    return <cartContext.Provider value={{
        cartList,
        agregarAlCarro,
        vaciarCarrito,
        precioTotal,
        cantidadItemsCarrito
    }} >
        {children}
    </cartContext.Provider>;
}

export default CartContextProvider;