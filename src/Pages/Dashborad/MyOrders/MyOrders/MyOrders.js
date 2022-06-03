import { signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../Components/Loading/Loading";
import auth from "../../../../firebase.init";
import Order from "../Order/Order";

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const emailOrUid = user?.email || user?.providerData[0]?.uid;

    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        getMyOrders();
    });

    const getMyOrders = async () => {

        const url = `http://localhost:5000/orders?emailOrUid=${emailOrUid}`;

        const res = await fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
        if (res.status === 200) {
            const data = await res.json();
            setMyOrders(data);
        }
        else {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate("/login");
        }
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