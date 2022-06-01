import React, { useState } from 'react';
import { Alert, Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import Loading from "../../../../Components/Loading/Loading";
import auth from "../../../../firebase.init";
import Order from "../Order/Order";


const MyOrders = () => {
    const [user] = useAuthState(auth);
    const emailOrUid = user?.email || user?.providerData[0]?.uid;
    const [show, setShow] = useState(true);

    const url = `http://localhost:5000/orders?emailOrUid=${emailOrUid}`;

    const { isLoading, error, data } = useQuery('findingMyOrders', () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return (
            <div>
                <Loading></Loading>;
            </div>
        );
    }

    if (error) {
        if (show) {
            return (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>Error : {error.message}</p>
                </Alert>
            );
        }
    }

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
                            <th>Total Amount</th>
                            <th className="text-center">Paid ?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((myOrder, index) => <Order key={index} myOrder={[myOrder, index]}></Order>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;