import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function Order() {
  const { idOrder } = useParams()
  const [loading, setloading] = useState(true)
  const [order, setOrder] = useState({})
  useEffect(() => {
    if (idOrder) {
      const db = getFirestore()
      const queryOrder = doc(db, 'Orders', idOrder)

      getDoc(queryOrder)
        .then(res => setOrder({ ido: res.id, ...res.data() }))
        .catch(err => console.log(err))
        .finally(() => () => setloading(false))
    }



  }, [])
  return (
    <div className="container">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Resume de Tu compra</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Hiciste una compra con el identificador: {order.ido}</p>
{/* {
  order.item.map(r => <p> {r.name}</p>)
} */}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link className="btn btn-primary" to='/'>Continuar Comprando</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order