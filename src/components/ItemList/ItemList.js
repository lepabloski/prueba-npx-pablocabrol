import React, { useState, useEffect } from 'react'
import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore'
import Item from '../Item/Item'
import Hero from '../Hero/Hero'
import { useParams } from 'react-router-dom'

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


  return (
    <div>
      <Hero />
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {loading ? <h2>Cargando ...</h2> :
              product.map(prod =>
                <div key={prod.id} className="col">
                  <Item {...prod} />
                </div>
              )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ItemList