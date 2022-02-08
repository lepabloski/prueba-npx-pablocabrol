import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount'

const TerminarCompra = () => {
  return <>
    <div class="d-grid gap-2">
      <Link className="btn btn-primary" to='/carrito'>Terminar compra</Link>
      <Link className="btn btn-primary" to='/'>Continuar comprando</Link>
    </div>
  </>
}

function ItemDetail({ producto }) {
  const [buttonType, setButtonType] = useState('count')
  const { cartList, agregarAlCarro } = useCartContext()

  console.log(cartList)
  // Funcion que contola la cantidad y cambia el tipo de componente a mostrar
  function onAdd(cant) {
    if (cant > 0) {
      setButtonType('finish')
      agregarAlCarro({ item: producto, quantity: cant })
    }
  }

  return <div className="container">
    <div className="card">
      <div className="container-fliud">
        <div className="wrapper row">
          <div className="preview col-md-6">

            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1"><img src={producto.foto} /></div>
            </div>
          </div>
          <div className="details col-md-6">
            <h3 className="product-title">{producto.name}</h3>
            <p className="product-description">Descripcion del producto</p>
            <h3 className="price">Precio: <span>{producto.price} Pesos</span></h3>
            <p className="vote"><strong>{producto.stock}</strong> productos en existencia.</p>
            <div className="action">
              {
                buttonType === 'count' ?
                  <ItemCount stock={producto.stock} inicial={1} onAdd={onAdd} />
                  :
                  <TerminarCompra />
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default ItemDetail;
