import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to='/' className="nav-link">
                <p className="navbar-brand" href="#">HatShop</p>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample03">
                <ul className="navbar-nav me-auto mb-2 mb-sm-0">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="nav-item">
                                <Link to='/' className="dropdown-item">
                                    Todos los productos
                                </Link>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className="nav-item">
                                <Link to='/category/gorras' className="dropdown-item">Gorras</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/remeras' className="dropdown-item">Remeras</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" to='/cart'><CartWidget /></Link></li>
                </ul>
            </div>
        </nav>
    )
}


