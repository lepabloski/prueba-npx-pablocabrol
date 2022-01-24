import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../helpers/mocks';

function ItemDetail({producto}) {

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
              <button className="add-to-cart btn btn-primary" type="button">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default ItemDetail;
