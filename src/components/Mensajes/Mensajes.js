import { Link } from 'react-router-dom'

function Mensajes() {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Lo sentimos!</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">NO hay productos en tu carrito, si te interesa, podes volver a comprar presionando el botón que aqui abajo!</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <Link className="btn btn-primary" to='/'>Continuar Comprando</Link>
                </div>
            </div>
        </div>
    )
}

export default Mensajes