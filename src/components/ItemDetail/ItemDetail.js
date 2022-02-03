import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'

const TerminarCompra = ({onAdd})=> {
  return <button className="btn btn-outline-success" ><Link className="nav-link" to='/carrito'>Terminar compra</Link></button>
}

function ItemDetail({producto}) {
  const [buttonType, setButtonType] = useState('count')
    
  // Funcion que contola la cantidad y cambia el tipo de componente a mostrar
    function onAdd(cant) {
      if (cant > 0) {
        setButtonType('toCart')
        console.log('lo se cambia el boton')
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
            <h4 className="price">Precio: <span>{producto.price}</span></h4>
            <p className="vote"><strong>{producto.stock}</strong> productos en existencia.</p>
            <div className="action">
              {
                buttonType === 'count' ?
                <ItemCount stock={producto.stock} inicial={1} onAdd={onAdd} /> 
                :
                <TerminarCompra/>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default ItemDetail;
