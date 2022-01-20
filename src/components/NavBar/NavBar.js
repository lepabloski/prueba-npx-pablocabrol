import React from 'react'
import CartWidget from '../CartWidget/CartWidget'


export default function NavBar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Grillshop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample03">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Parrillas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Accesorios</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Membresias</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown03">
                                <li><a className="dropdown-item" href="#">Parrillero</a></li>
                                <li><a className="dropdown-item" href="#">Parrillero Gourmet</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
    )
}


