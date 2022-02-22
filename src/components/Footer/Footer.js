import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
    return (
        <>
            <Container>
                <footer color="primary" className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p className="col-md-4 mb-0 text-muted">&copy; 2021 HatShop</p>

                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <h1>HatShop</h1>
                    </a>

                    <ul className="nav col-md-4 justify-content-end">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Inicio</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Gorras</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Remeras</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Accesorios</a></li>
                    </ul>
                </footer>
            </Container>
        </>
    )
}

export default Footer
