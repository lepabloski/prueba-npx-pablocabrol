import React from 'react'
import { Link} from 'react-router-dom'
import Thumbnail from '../Thumbnail/Thumbnail';

function Item(prod) {
  return (
    <div className="card shadow-sm">
      <Thumbnail image={prod.foto} />
      <div className="card-body">
        <h2><p className="card-title"><b>{prod.name} </b></p></h2>
        <h4 className="card-text">Categoría: <b>{prod.categoria} </b>| Stock: <b>{prod.stock}</b></h4>
        <p className="card-text">{prod.descripcion} </p>
        <div className="d-flex justify-content-between align-items-center">
          <br />
          <div className="btn-group">
            <small className="card-text"><b>$ {prod.price}</b></small>
          </div>
        </div>
        <Link to={`/detail/${prod.id}`}>
          <button className="btn btn-primary">Detalle</button>
        </Link>

      </div>
    </div>
  )
}

export default Item
