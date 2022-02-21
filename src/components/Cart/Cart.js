import { useCartContext } from "../../context/cartContext";

function Cart(prod, key) {
  const { removeFromCart } = useCartContext()

  return <li className="list-group-item d-flex justify-content-between lh-sm" key={key}>
    <div>
      <h6 className="my-0">{prod.item.name}</h6>
      <small className="text-muted">{prod.item.descripcion}</small>
    </div>
    <span className="text-muted">$ {prod.item.price}</span>
    <span className="text-muted">
      <button type="button" className="btn btn-primary" aria-label="Close" onClick={() => removeFromCart(prod.item.id)} >X</button>
    </span>
  </li>
}

export default Cart;
