import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount'

const FinishingBuy = () => {
  return <>
    <div className="d-grid gap-1">
      <div className="row">
        <div className="col-md-2 col-md-6">
          <Link className="btn btn-success" to='/cart'>Terminar compra <FontAwesomeIcon className="ShoppingCar" icon={faShoppingCart} /></Link>
        </div>
        <div className="col-md-2 col-md-6">
          <Link className="btn btn-secondary" to='/'>Seguir comprando</Link>
        </div>
      </div>
    </div>
  </>
}

function ItemDetail({ prod }) {
  const [buttonType, setButtonType] = useState('count')
  const { addToCart } = useCartContext()

  // Funcion que contola la cantidad y cambia el tipo de componente a mostrar
  function onAdd(cant) {
    if (cant > 0) {
      setButtonType('finish')
      addToCart({ item: prod, quantity: cant })
    }
  }

  return <div className="container">
    <div className="col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={prod.foto} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">{prod.name}</h1>
          <p className="lead">{prod.descripcion}</p>
          <h3 className="price">Precio: <span>{prod.price} Pesos</span></h3>
          <p className={`${prod.stock > 5 ?
            "text-success"
            :
            "text-primary"}`
          }><strong>{prod.stock}</strong> productos en existencia.</p>
          <div className="d-grid gap-2 justify-content-md-start">
            {
              buttonType === 'count' ?
                <ItemCount stock={prod.stock} inicial={1} onAdd={onAdd} />
                :
                <FinishingBuy />
            }
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default ItemDetail;
