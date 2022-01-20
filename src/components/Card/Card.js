import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import Thumbnail from '../Thumbnail/Thumbnail';

function Card(prod) {
  // Funcion que muestra la cantidad
  function onAdd(cant) {
    console.log(cant)
  }

  return (
    <div className="card shadow-sm">
      <Thumbnail image={prod.foto} />
      <div className="card-body">
        <h2><p className="card-title"><b>{prod.name} </b></p></h2>
        <p className="card-text">Categoría: <b>{prod.categoria} </b>| Stock: <b>{prod.stock}</b></p>
        <div className="d-flex justify-content-between align-items-center">
          <br />
          <div className="btn-group">
            <small className="text-muted">$ {prod.price}</small>
          </div>
        </div>
        <ItemCount stock={prod.stock} inicial={1} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default Card
