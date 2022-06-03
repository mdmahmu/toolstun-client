import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../../../Components/Loading/Loading";
import auth from "../../../../firebase.init";
import Order from "../Order/Order";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const emailOrUid = user?.email || user?.providerData[0]?.uid;

    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        getMyOrders();
    });

    const getMyOrders = () => {
        fetch(`http://localhost:5000/orders?emailOrUid=${emailOrUid}`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    };

    return (
        <div>
            <h4 className="text-center text-danger"> My orders</h4>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Product ID</th>
                            <th>Amount</th>
                            <th className="text-center">Paid ?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !myOrders ? <Loading></Loading> :
                                myOrders?.map((myOrder, index) => <Order key={index} myOrder={[myOrder, index]}></Order>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;