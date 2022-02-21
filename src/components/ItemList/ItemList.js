import React, { useState, useEffect } from 'react'
import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore'
import Item from '../Item/Item'
import { Link, useParams } from 'react-router-dom'

function ItemList() {
  const [product, setProduct] = useState([])
  const [loading, setloading] = useState(true)
  const { idCategory } = useParams()

  useEffect(() => {
    const db = getFirestore()
    console.log(idCategory)
    const queryCollection = collection(db, 'Items')

    let querys = idCategory ? query(queryCollection, where('categoria', '==', idCategory)) : queryCollection

    getDocs(querys)
      .then(resp => setProduct(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
      .catch(err => console.log(err))
      .finally(() => setloading(false))

  }, [idCategory])


  return (<>
    {/* <Hero /> */}
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb container">
        {idCategory != undefined ? <li className="breadcrumb-item active" aria-current="page">{idCategory}</li> : <li className="breadcrumb-item active" aria-current="page">Todos</li>}
      </ol>
    </nav>
    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 text-white bg-primary rounded-3">
          <h2>Gorras</h2>
          <p>Gooras galacticas para esa capochina!</p>
          <Link to='/category/gorras' className="btn btn-light">Filtrar</Link>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>Remeras</h2>
          <p>Remeras top para semejante personaje!</p>
          <Link to='/category/remeras' className="btn btn-secondary">Filtrar</Link>
        </div>
      </div>
    </div>
    <br />
    {loading ?
      <div className='row'>
        <div className="d-flex justify-content-center text-primary">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      </div>
      :
      <>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {product.map((prod, i) =>
            <Item {...prod} key={i} />
          )}
        </div>
      </>

    }
  </>

  )
}

export default ItemList