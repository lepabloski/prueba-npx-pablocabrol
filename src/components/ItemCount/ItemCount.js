import React, { useState } from 'react'

function ItemCount({ stock, inicial, onAdd }) {
  const [count, setCount] = useState(inicial)
  const [disable, setDisable] = useState(false)
  const incCount = () => {
    // Controlo que la cantidad sea menor que el stock
    if (count < stock) {
      setCount(count + 1)
      if (count >= 0) {
        // Si es mayor que cero el campo agregar al carrito esta habilitado
        setDisable(false)
      }
    }
  };

  const decCount = () => {
    if (count > 1) {
      // Controlo que el numero sea mas que 1 para poder restar
      setCount(count - 1)
    } else {
      // Me aseguro que el valor sea cero en ese caso y deshabilito en boton.
      setCount(0)
      setDisable(true)
    }
  };

  const agregar=()=>{
    onAdd(count)
  }


  return (
    <>
        <div className="input-group ">
          <button onClick={incCount} type="button" className="btn btn-secondary">+</button>
          <input type="text" className="form-control text-center" placeholder={count}/>
          <button onClick={decCount} type="button" className="btn btn-secondary">-</button>
        </div>
        <br/>
      <button type="button" className="btn btn-primary" disabled={disable} onClick={agregar}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount