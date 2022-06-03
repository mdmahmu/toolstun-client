import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from 'react';
import { Alert, Card } from "react-bootstrap";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51L5l9QIdyjEg6zNXA5FN89R2WkkeqplW4fH7VPiwqEQ3KyHy5cxg0zMxuDCzCGhC0Jy7OM2Q1uMvDysw6wbxv7ds00i65Y5ieb');

const Payment = () => {

    const { orderId } = useParams();
    const [show, setShow] = useState(true);

    const url = `https://nameless-headland-97121.herokuapp.com/payment/${orderId}`;
    const { isLoading, error, data } = useQuery('findingMyOrders', () => fetch(url).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }

    if (error) {
        if (show) {
            return (
                <p>
                    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Oh no! You got an error!</Alert.Heading>
                        <p>Error : {error.message}</p>
                    </Alert>
                </p>
            );
        }
    }

    return (
        <div className="container">
            <h2 className="text-center text-danger my-4">Enter payment details to complete the transaction</h2>
            <div className="w-50 mx-auto mb-4">
                <h5 className="text-secondary">Product Name : {data.productName} </h5>
                <h5 className="text-secondary">Total Amount to Pay : ${data.bought * data.unitPrice}</h5>
            </div>

            <Card className="w-50 mx-auto mb-5">
                <Card.Header as="h5">Enter Your Card Info</Card.Header>
                <Card.Body>
                    <div className="mt-2 mb-0">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm orderDetails={data}></CheckoutForm>
                        </Elements>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Payment;