import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function Order() {
  const { idOrder } = useParams()
  const [loading, setloading] = useState(true)
  const [order, setOrder] = useState({})

  useEffect(() => {
    let isMounted = true;
    // funcion que toma el IdOrder pasado por parametro y obtiene la orden correspondiente
    const getOrder = () => {
      if (isMounted) {
        const db = getFirestore()
        const queryOrder = doc(db, 'Orders', idOrder)
        getDoc(queryOrder)
          .then(res => {
            setOrder({ id: res.id, ...res.data() })
          })
          .catch(err => console.log(err))
          .finally(() => {
            setloading(false)
          })
      }
    }

    // invoco la funcion
    getOrder()

    return () => {
      isMounted = false
    }
  }, [idOrder])


  const currentOrder = () => {
    return order
  }

  currentOrder()
  return (
    <>
      {loading ?
        <div className="container">
          <div className="d-flex justify-content-center text-primary">
            <div className="spinner-border" role="status">
              <span className="visually-hidden"></span>
            </div>
          </div>
        </div>
        :
        <div className="container">
          <div className="container px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Resume de Tu compra</h1>
            <div className="col-lg-8 mx-auto">
              <p className="lead mb-4">Hiciste una compra con el identificador: <b>{currentOrder().id}</b></p>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <b>Nombre: <p>{currentOrder().buyer.name}</p></b>
                  </div>
                  <div class="col">
                    <b>Teléfono: <p>{currentOrder().buyer.phone}</p></b>
                  </div>
                  <div class="col">
                    <b>Email: <p>{currentOrder().buyer.email}</p></b>
                  </div>
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {currentOrder().item
                    .map((r, key) =>
                      <tr key={key}>
                        <th scope="row">{r.id}</th>
                        <td>{r.title}</td>
                        <td>{r.price}</td>
                        <td>{r.quantity}</td>
                      </tr>
                    )}
                </tbody>
              </table>
              <div class="container">
                <div class="row">
                  <div class="col-4">Total: </div>
                  <div class="col-8"><b>$ {currentOrder().total}</b></div>
                </div>
              </div>

              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link className="btn btn-primary" to='/'>Continuar Comprando</Link>
              </div>
            </div>
          </div>
        </div>
      }

    </>

  )
}

export default Order