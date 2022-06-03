import React, { useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Order = ({ myOrder }) => {
    const [order, index] = myOrder;

    const [modalShow, setModalShow] = useState(false);
    const [modalShow2, setModalShow2] = useState(false);

    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/payment/${id}`);
    };

    const handleDelete = (orderId) => {
        const url = `http://localhost:5000/orders/${orderId}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                setModalShow2(false);
            }
            );
    };

    return (
        <tr>
            <td>{index + 1}</td>
            <td className="text-truncate">{order.productName}</td>
            <td className="text-truncate">{order.productId}</td>
            <td className="text-center">${order.bought * order.unitPrice}</td>

            <td className="d-flex align-items-center justify-content-center">
                {
                    order.transactionId ?
                        <div className="d-flex">
                            <Button variant="success" className="px-4">Paid</Button>
                            <Button variant="warning" className="px-4 ms-2" onClick={() => setModalShow(true)}>TID</Button>
                        </div> :
                        <div className="d-flex">
                            <Button onClick={() => navigateToItemDetail(order._id)} variant="info" className="px-4">Pay</Button>
                            <Button variant="danger" className="px-4 ms-2" onClick={() => setModalShow2(true)}>Del</Button>
                        </div>
                }
            </td>

            <Modal show={modalShow} centered onHide={() => setModalShow(false)}>
                <Modal.Header className="bg-secondary" closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="text-white">
                        <h5>Payment is completed for this order</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Transaction Id : <span className="fs-5">{order.transactionId}</span></p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)} variant="dark">Close</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={modalShow2} centered onHide={() => setModalShow2(false)}>
                <Modal.Header className="bg-danger text-dark" closeButton>
                    <Modal.Title>Warning !</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete this order?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalShow2(false)}>
                        No
                    </Button>
                    <Button variant="dark" onClick={() => handleDelete(order._id)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </tr>
    );
};

export default Order;