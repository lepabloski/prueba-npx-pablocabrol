import React from 'react'
import { Link } from 'react-router-dom'
import Thumbnail from '../Thumbnail/Thumbnail';

function Item(prod) {
  return (
    <div className="card shadow-sm" key={prod.id}>
      <Thumbnail image={prod.foto} />
      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">{prod.name}</h5>
          <b>$ {prod.price}</b>
          <p className="card-text">Categoría: <b>{prod.categoria} </b><br/> Stock: <b>{prod.stock}</b></p>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center"><Link to={`/detail/${prod.id}`}>
            <button className="btn btn-primary">Detalle</button>
          </Link></div>
        </div>
      </div>
    </div>
  )
}

export default Item
