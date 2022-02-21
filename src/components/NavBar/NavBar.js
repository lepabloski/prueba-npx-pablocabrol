import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
            <Navbar.Brand as={Link} to='/'>HatShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Todos los productos</Nav.Link>
                    <Nav.Link as={Link} to='/category/gorras'>Gorras</Nav.Link>
                    <Nav.Link as={Link} to='/category/remeras'>Remeras</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/cart"><CartWidget /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}


