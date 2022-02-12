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
                    <li className="nav-item">
                        <Link to='/category/gorras' className="nav-link">Gorras</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/category/remeras' className="nav-link">Remeras</Link>
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


