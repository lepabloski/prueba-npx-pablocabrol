import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, getFirestore, doc } from 'firebase/firestore'

function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const [loading, setloading] = useState(true)
  const { IdProduct } = useParams()
  useEffect(() => {
    if (IdProduct) {
      const db = getFirestore()

      const queryProduct = doc(db, 'Items', IdProduct)

      getDoc(queryProduct)
        .then(res => {
          setProduct({ id: res.id, ...res.data() })
        })
        .catch(err => console.log(err))
        .finally(() => setloading(false))


    }
  }, [])

  return <>
    {loading ?
      <div className="container">
        <div className="d-flex justify-content-center text-primary">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      </div>
      :
      <ItemDetail prod={product} />}
  </>
}

export default ItemDetailContainer
