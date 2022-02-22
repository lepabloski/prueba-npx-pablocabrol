import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount'

import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
  const [show, setShow] = useState(false)
  const [countNumber, setCountNumber] = useState(0)
  const { addToCart } = useCartContext()

  // Funcion que contola la cantidad y cambia el tipo de componente a mostrar
  function onAdd(cant) {
    if (cant > 0) {
      setCountNumber(cant)
      setButtonType('finish')
      setShow(true)
      addToCart({ item: prod, quantity: cant })
    }
  }

  return <Container>
    <ToastContainer className="p-3" position='top-end' >
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Body>Agregaste {countNumber} {prod.name} al carrito! </Toast.Body>
      </Toast>
    </ToastContainer>
    <Col className="col-xxl-8 px-4 py-5">
      <Row className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <Col className="col-10 col-sm-8 col-lg-6">
          <img src={prod.foto} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </Col>
        <Col className="col-lg-6">
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
        </Col>
      </Row>
    </Col>
  </Container>
}

export default ItemDetail;
