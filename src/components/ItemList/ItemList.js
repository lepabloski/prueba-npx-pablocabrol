import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
import Hero from '../Hero/Hero'
import Footer from '../Footer/Footer'
import { getItems } from '../../helpers/mocks'
import { useParams } from 'react-router-dom'
function ItemList() {
  const [productos, setProductos] = useState ([])
  const [loading, setloading] = useState(true)
  const {idCategoria} = useParams()
  
  useEffect(() => {
    if (idCategoria) {
      getItems
      .then(res => setProductos(res.filter(produ => {
          return produ.categoria === idCategoria
      })))
      .catch(err => console.log(err))
      .finally(()=> setloading(false)) 
    } else {
      getItems
      .then(res => setProductos(res))
      .catch(err => console.log(err))
      .finally(()=> setloading(false))  
    }
  
}, [idCategoria])

  return (
    <div>
      <Hero />
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          { loading ? <h2>Cargando ...</h2> :
                                    productos.map( prod => 
                                    <div key={prod.id} className="col">
                                    <Item {...prod}/>
                                  </div>                                
            
            ) } 

            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ItemList