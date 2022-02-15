import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount'

const FinishingBuy = () => {
  return <>
    <div className="d-grid gap-2">
      <Link className="btn btn-primary" to='/cart'>Terminar compra</Link>
      <Link className="btn btn-primary" to='/'>Continuar comprando</Link>
    </div>
  </>
}

function ItemDetail({ product }) {
  const [buttonType, setButtonType] = useState('count')
  const { addToCart } = useCartContext()

  // Funcion que contola la cantidad y cambia el tipo de componente a mostrar
  function onAdd(cant) {
    if (cant > 0) {
      setButtonType('finish')
      addToCart({ item: product, quantity: cant })
    }
  }

  return <div className="container">
    <div className="card">
      <div className="container-fliud">
        <div className="wrapper row">
          <div className="preview col-md-6">

            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1"><img src={product.foto} /></div>
            </div>
          </div>
          <div className="details col-md-6">
            <h3 className="product-title">{product.name}</h3>
            <p className="product-description">{product.descripcion}</p>
            <h3 className="price">Precio: <span>{product.price} Pesos</span></h3>
            <p className="vote"><strong>{product.stock}</strong> productos en existencia.</p>
            <div className="action">
              {
                buttonType === 'count' ?
                  <ItemCount stock={product.stock} inicial={1} onAdd={onAdd} />
                  :
                  <FinishingBuy />
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default ItemDetail;
