import { useCartContext } from "../../context/cartContext";

function Cart() {
  const { cartList, vaciarCarrito, precioTotal } = useCartContext()
  return <div className="container">
    {cartList.map(prod =>
      <div className="card mb-3" key={prod.item.id}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={prod.item.foto} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Nombre: {prod.item.name}</h5>
              <p className="card-text">Precio: {prod.item.price}</p>
              <p className="card-text"><small className="text-muted">cantidad: {prod.quantity}</small></p>
            </div>
          </div>
        </div>
      </div>
    )}
    <br />
    <h2>Precio total <span className="badge bg-secondary">{precioTotal()}</span></h2>
    <button className="btn btn-primary" onClick={vaciarCarrito}>Vaciar carrito</button>
  </div>;
}

export default Cart;
