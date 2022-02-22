import React, { useState, useEffect } from 'react'
import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore'
import Item from '../Item/Item'
import { Link, useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Breadcrumb  from 'react-bootstrap/Breadcrumb'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row  from 'react-bootstrap/Row'

function ItemList() {
  const [product, setProduct] = useState([])
  const [loading, setloading] = useState(true)
  const { idCategory } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'Items')

    let querys = idCategory ? query(queryCollection, where('categoria', '==', idCategory)) : queryCollection

    getDocs(querys)
      .then(resp => setProduct(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
      .catch(err => console.log(err))
      .finally(() => setloading(false))

  }, [idCategory])


  return (<>
    <Container>
      <br />
      <Breadcrumb>
        <Breadcrumb.Item >{idCategory != undefined ? <li className="breadcrumb-item active" aria-current="page">{idCategory}</li> : <li className="breadcrumb-item active" aria-current="page">Todos</li>}</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col sm={6}>
          <Card className="bg-dark text-white">
            <Card.Img src={require("./gorras_hatshop_front.jpg")} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Gorras</Card.Title>
              <Card.Text>
                Gooras galacticas para esa capochina!
              </Card.Text>
              <Card.Text><Link to='/category/gorras' className="btn btn-light">Filtrar</Link></Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col sm={6}>
          <Card className="bg-dark text-white">
            <Card.Img src={require("./remeras-hatshop-front.jpg")} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Remeras</Card.Title>
              <Card.Text>
                Remeras top para semejante personaje!
              </Card.Text>
              <Card.Text><Link to='/category/remeras' className="btn btn-light">Filtrar</Link></Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <br />
      {loading ?
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden"></span>
            </div>
          </Col>
          <Col sm={3}></Col>
        </Row>
        :
        <>
          {/* <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"> */}
          <Row className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {product.map((prod, i) =>
              <Item {...prod} key={i} />
            )}
          </Row>

          {/* </div> */}
        </>

      }
    </Container>
  </>

  )
}

export default ItemList