import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getItems } from '../../helpers/mocks';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, getFirestore, doc, setLogLevel } from 'firebase/firestore'

function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const [loading, setloading] = useState(true)
  const { IdProducto } = useParams()
  useEffect(() => {
    if (IdProducto) {
    //   getItems
    //     .then(res => setProducto(res.find(produ => {
    //       return produ.id === IdProducto
    //     })))
    //     .catch(err => console.log(err))
    //     .finally(() => setloading(false))
    // }
    const db = getFirestore()

    const queryProducto = doc(db, 'Items', IdProducto)

    getDoc(queryProducto)
    .then(res => {
      setProducto({id: res.id, ...res.data()})
    })
    .catch(err => console.log(err))
    .finally(() => setloading(false))


  }
}, [])

  return <>
    {loading ? <h2>loading</h2> : <ItemDetail producto={producto} />}
  </>
}

export default ItemDetailContainer
