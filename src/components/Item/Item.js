import React from 'react'
import { Link } from 'react-router-dom'
import Thumbnail from '../Thumbnail/Thumbnail';

function Item(prod) {

  return (
    <div className="col">
      <div className="card shadow-sm">
        <Thumbnail image={prod.foto} />
        <div className="card-body">
          <h5 className="fw-bolder">{prod.name}</h5>
          <p className="card-text text-truncate">{prod.descripcion} <br /></p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-center">
              <Link to={`/item/${prod.id}`}>
                <button className="btn btn-primary">Detalle</button>
              </Link>
            </div>
            <small className={`${prod.stock > 5 ? "text-success" : "text-primary"}`}><b>Stock: {prod.stock}</b></small>
          </div>
        </div>
      </div>
      <br />

    </div>
  )
}

export default Item
