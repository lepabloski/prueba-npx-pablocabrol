import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, getFirestore, doc} from 'firebase/firestore'

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
      setProduct({id: res.id, ...res.data()})
    })
    .catch(err => console.log(err))
    .finally(() => setloading(false))


  }
}, [])

  return <>
    {loading ? <h2>loading</h2> : <ItemDetail product={product} />}
  </>
}

export default ItemDetailContainer
