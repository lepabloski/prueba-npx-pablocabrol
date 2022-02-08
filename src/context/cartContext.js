import { createContext, useState, useContext } from "react";

const cartContext = createContext([])

export function useCartContext() { return useContext(cartContext) }

//crear un componente

function CartContextProvider({ children }) {

    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0);
    const [vacio, setVacio] = useState(true)
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
        setVacio(false)
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
        setVacio(true)
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

    // funcion para eliminar un producto de la lista
    const quitarDelcarrito = (v) => {
        const nuevoCartList = cartList.filter(e => e.item.id !== v)
        if (nuevoCartList.length === 0) {
            setVacio(true)
        }
        return setCartList(nuevoCartList)
    }

    return <cartContext.Provider value={{
        cartList,
        agregarAlCarro,
        vaciarCarrito,
        precioTotal,
        cantidadItemsCarrito,
        quitarDelcarrito,
        vacio
    }} >
        {children}
    </cartContext.Provider>;
}

export default CartContextProvider;