import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import Cart from "../Cart/Cart";
import Messages from "../Messages/Messages";
import { generatePath, useNavigate } from 'react-router';
import { useState } from "react";

import { Col, Container, ListGroup, Row, Form, Button } from "react-bootstrap";

function CartList() {
    const { cartList, totalPrice, empty, emptyCart, howMany } = useCartContext()
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        validarEmail: '',
        phone: '',
        name: ''
    })


    // Defino una forma de navegar a una url definida
    const navigate = useNavigate();

    // Creo una funcion de compra
    const buy = async (e) => {
        e.preventDefault()
        let order = {}

        order.buyer = formData
        order.total = totalPrice()

        order.item = cartList.map(cartItem => {
            const id = cartItem.item.id
            const title = cartItem.item.name
            const price = cartItem.item.price * cartItem.quantity
            const quantity = cartItem.quantity

            return {
                id,
                title,
                price,
                quantity
            }
        })

        const db = getFirestore()
        const orderCollection = collection(db, 'Orders')
        await addDoc(orderCollection, order)
            .then(resp => showOrderId(resp.id))
            .catch(err => console.log(err))
            .finally(() => {
                // muestra un alert con el id de la orden creada y luesog borra el carrito
                emptyCart()
            }
            )

        const queryCollection = collection(db, 'Items')


        const queryStockUpdate = query(
            queryCollection,
            where(documentId(), 'in', cartList.map(it => it.item.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryStockUpdate)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.item.id === res.id).quantity
            })
            ))
            .catch(err => console.log(err))
            .finally(() => {
                setFormData({
                    email: '',
                    validarEmail: '',
                    phone: '',
                    name: ''
                })
                emptyCart()
            })
        batch.commit()

    }

    const handleChange = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
        setFormData({
            ...formData,
            [form.name]: form.value
        })


    }

    const showOrderId = (id) => {
        navigate(generatePath('/order/:idOrder', { idOrder: id }));

    }

    return (
        <Container>
            <br />
            {!empty ? <>
                <Row className="g-5">
                    <Col sm={5} className="order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Tu Carrito</span>
                            <span className="badge bg-primary rounded-pill text-light ">{howMany()}</span>
                        </h4>
                        <ListGroup>
                            {cartList.map((prod, i) =>
                                <Cart {...prod} key={i} />
                            )}
                        </ListGroup>
                        <ListGroup>
                            <ListGroup.Item className="d-flex justify-content-between align-items-center mb-3">
                                <span>Total</span>
                                <strong>{totalPrice()} $</strong>
                            </ListGroup.Item>
                        </ListGroup>

                    </Col>
                    <Col sm={7}>
                        <h4 className="mb-3">Datos Personales</h4>
                        <Form noValidate validated={validated} className="card p-2" onSubmit={buy}>
                            <Row className="g-3">
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="name">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Ingrese el nombre"
                                            onChange={handleChange}
                                            defaultValue={formData.name}
                                            name='name'
                                        />
                                        <Form.Control.Feedback>Todo Ok</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Ingrese un nombre
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={12}>
                                    <Form.Group className="mb-3" controlId="phone">
                                        <Form.Label>Teléfono</Form.Label>
                                        <Form.Control
                                            required
                                            type="number"
                                            name='phone'
                                            placeholder="Ingrese el teléfono"
                                            onChange={handleChange}
                                            defaultValue={formData.phone}
                                        />
                                        <Form.Control.Feedback>Todo Ok</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Ingrese un Teléfono
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            name='email'
                                            placeholder="Ingrese el Email"
                                            onChange={handleChange}
                                            defaultValue={formData.email}
                                        />
                                        <Form.Control.Feedback>Todo Ok</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Ingrese un email
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="validarEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            name='validarEmail'
                                            placeholder='Repetir Email'
                                            onChange={handleChange}
                                            defaultValue={formData.validarEmail}
                                        />
                                        <Form.Control.Feedback>Todo Ok</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Re Ingrese un email
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br />
                            <Button type="submit">Crear Orden</Button>
                        </Form>
                    </Col>
                </Row>

            </>
                :
                <Messages />
            }
            {!empty ? <>
                <br />
                <Link className="btn btn-primary" to='/'>Continuar Comprando</Link>
                <button className="btn btn-primary" onClick={emptyCart}>Vaciar carrito</button>
            </> : ''}
            {

            }
        </Container>
    )
}

export default CartList