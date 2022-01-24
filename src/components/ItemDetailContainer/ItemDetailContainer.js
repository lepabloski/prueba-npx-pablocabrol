import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItems } from '../../helpers/mocks';
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
  const [producto, setProducto] = useState({})
  const { IdProducto } = useParams()
  useEffect(() => {
    if (IdProducto) {
      getItems
        .then(res => setProducto(res.find(produ => {
          return produ.id === IdProducto
        })))
        .catch(err => console.log(err))
        .finally()
    }

  }, [])

  return <ItemDetail producto={producto}/>;
}

export default ItemDetailContainer
