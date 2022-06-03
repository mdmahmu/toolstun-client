import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const CheckoutForm = ({ orderDetails }) => {
    const [showError, setShowError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate();
    const price = parseInt(orderDetails.bought * orderDetails.unitPrice);

    useEffect(() => {
        fetch('https://nameless-headland-97121.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('Error : ', error);
            setShowError(error.message);
        }
        else {
            setShowError('');
            console.log('Create Payment ; ', paymentMethod);
        }

        //payment confirmation
        const { paymentIntent, error: error2 } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                },
            },
        );

        if (error2) {
            console.log('Error 2 : ', error2);
            setShowError(error2.message);
        }
        else {
            setShowError('');
            toast.success("Payment is completed.");
            const productId = orderDetails.productId;
            const bought = orderDetails.bought;

            const orderId = orderDetails._id;
            const transactionId = paymentIntent.id;
            fetch(`https://nameless-headland-97121.herokuapp.com/update_data`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ productId, bought, orderId, transactionId })
            })
                .then(res => res.json())
                .then(data => {
                    navigate('/all_tools');
                });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {showError && <p className="text-danger mt-2 mb-0">{showError}</p>}
            <button type="submit" disabled={!stripe} className="bg-info px-4 mb-4 mt-4 border-0">
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;