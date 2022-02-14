import { useCartContext } from "../../context/cartContext";

function Cart(prod) {
  const {  removeFromCart,  } = useCartContext()

  return <div className="card mb-3" key={prod.item.id}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={prod.item.foto} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{prod.item.name}</h5>
                <p className="card-text">Precio: <b>{prod.item.price}</b> </p>
                <p className="card-text">Detalle: {prod.item.descripcion}</p>
                <p className="card-text"><small className="text-muted">Cantidad: {prod.quantity}</small></p>
                <button type="button" className="btn btn-primary" aria-label="Close" onClick={() => removeFromCart(prod.item.id)} >Quitar X</button>
              </div>
            </div>
          </div>
        </div>
}

export default Cart;
