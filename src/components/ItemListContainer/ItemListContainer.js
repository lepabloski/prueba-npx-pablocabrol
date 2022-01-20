import React, {useState, useEffect} from 'react'
import Card from '../Card/Card'
import Thumbnail from '../Thumbnail/Thumbnail'
import { getFetch } from '../../helpers/mocks'
function ItemListContainer() {
  const [productos, setProductos] = useState ([])
  const [loading, setloading] = useState(true)
  
  
  useEffect(() => {
      getFetch
      .then(res => setProductos(res))
      .catch(err => console.log(err))
      .finally(()=> setloading(false))     
  }, [])

  return (
    <div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          { loading ? <h2>Cargando ...</h2> :
                                    productos.map( prod => 
                                    <div key={prod.id} className="col">
                                    <Card {...prod}>
                                      <Thumbnail imagen = {prod.foto} placeholder = {prod.nombre}/>
                                    </Card>
                                  </div>                                
            
            ) } 

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer
