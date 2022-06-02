import React, { useEffect, useState } from 'react';
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Order = ({ myOrder }) => {
    const [order, index] = myOrder;

    const [modalShow, setModalShow] = useState(false);

    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/payment/${id}`);
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
                            <Button onClick={() => navigateToItemDetail(order._id)} variant="danger" className="px-4 ms-2">Del</Button>
                        </div>
                }
            </td>

            <Modal show={modalShow} centered>
                <Modal.Header className="bg-secondary">
                    <Modal.Title id="contained-modal-title-vcenter" className="text-white">
                        Transaction Id
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{order.transactionId}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setModalShow(false)} variant="dark">Close</Button>
                </Modal.Footer>
            </Modal>


        </tr>
    );
};

export default Order;