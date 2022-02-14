import React from 'react'
import { Link } from 'react-router-dom'
import Thumbnail from '../Thumbnail/Thumbnail';

function Item(prod) {
  return (
    <div className="card shadow-sm">
      <Thumbnail image={prod.foto} />
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder">{prod.name}</h5>
          <b>$ {prod.price}</b>
          <p className="card-text">Categoría: <b>{prod.categoria} </b><br/> Stock: <b>{prod.stock}</b></p>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center"><Link to={`/detail/${prod.id}`}>
            <button className="btn btn-primary">Detalle</button>
          </Link></div>
        </div>
      </div>
    </div>
  )
}

export default Item
