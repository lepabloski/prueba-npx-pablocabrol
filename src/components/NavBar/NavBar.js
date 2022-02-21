import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'


export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top">
        <Container>
            <Navbar.Brand as={Link} to='/'>HatShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                <Nav>
                    <Nav.Link as={Link} to="/">Todos los productos</Nav.Link>
                    <Nav.Link as={Link} to='/category/gorras'>Gorras</Nav.Link>
                    <Nav.Link as={Link} to='/category/remeras'>Remeras</Nav.Link>
                </Nav>
                <Nav className='ms-auto'>
                    <Nav.Link as={Link} to="/cart"><CartWidget /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}


