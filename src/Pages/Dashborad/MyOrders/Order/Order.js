import React from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Order = ({ myOrder }) => {
    console.log(myOrder[0]);
    const [order, index] = myOrder;
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/payment/${id}`);
    };
    return (
        <tr>
            <td>{index + 1}</td>
            <td className="text-truncate">{order.productName}</td>
            <td className="text-truncate">{order.productId}</td>
            <td className="text-center">${order.totalAmount}</td>
            <td className="d-flex align-items-center justify-content-center">{order.paid ? <Button variant="success">Paid</Button> : <Button onClick={() => navigateToItemDetail(order._id)} variant="info" className="px-4">Pay</Button>}</td>
        </tr>
    );
};

export default Order;