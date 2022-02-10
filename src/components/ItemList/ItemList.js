import React, { useState, useEffect } from 'react'
import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore'
import Item from '../Item/Item'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom'
function ItemList() {
  const [productos, setProductos] = useState([])
  const [loading, setloading] = useState(true)
  const { idCategoria } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'Items')

    let querys = ''
    if (idCategoria) {
      querys = query(queryCollection, where('categoria', '==', idCategoria))
    } else {
      querys= queryCollection
    }
    getDocs(querys)
      .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
      .catch(err => console.log(err))
      .finally(() => setloading(false))
  }, [idCategoria])


  return (
    <div>
      <Hero />
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {loading ? <h2>Cargando ...</h2> :
              productos.map(prod =>
                <div key={prod.id} className="col">
                  <Item {...prod} />
                </div>
              )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ItemList