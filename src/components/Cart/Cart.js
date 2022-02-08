import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";

function Cart() {
  const { cartList, vaciarCarrito, precioTotal, quitarDelcarrito, vacio } = useCartContext()
  return <div className="container">
    {!vacio ?
      cartList.map((prod, index) =>
        <div className="card mb-3" key={index}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={prod.item.foto} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Nombre: {prod.item.name}</h5>
                <p className="card-text">Precio: {prod.item.price}</p>
                <p className="card-text"><small className="text-muted">cantidad: {prod.quantity}</small></p>
                <button type="button" className="btn btn-primary" aria-label="Close" onClick={() => quitarDelcarrito(prod.item.id)} >Quitar X</button>
              </div>
            </div>
           
          </div>
        </div>
      ) :
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Lo sentimos!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">NO hay productos en tu carrito, si te interesa, podes volver a comprar presionando el botón que aqui abajo!</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link className="btn btn-primary" to='/'>Continuar Comprando</Link>
          </div>
        </div>
      </div>
    }
    {!vacio ? <>
      <br />
      <h2>Precio total {precioTotal()} Pesos</h2>
      <Link className="btn btn-primary" to='/'>Continuar Comprando</Link>
      <button className="btn btn-primary" onClick={vaciarCarrito}>Vaciar carrito</button>
    </> : ''}
  </div>;
}

export default Cart;
