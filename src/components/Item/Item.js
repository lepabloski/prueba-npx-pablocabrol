import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Thumbnail from '../Thumbnail/Thumbnail';

function Item(prod) {

  return (
    <Col>
      <Card className="shadow-sm">
        <Thumbnail image={prod.foto} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>
            {prod.descripcion}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-center">
              <Link to={`/item/${prod.id}`}>
                <Button variant="primary">Detalle</Button>
              </Link>
            </div>
            <small className={`${prod.stock > 5 ? "text-success" : "text-primary"}`}><b>Stock: {prod.stock}</b></small>
          </div>
        </Card.Body>
      </Card>
      <br />
    </Col>
  )
}

export default Item
