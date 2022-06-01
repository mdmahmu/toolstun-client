import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from 'react';
import { toast } from "react-toastify";


const CheckoutForm = ({ orderDetails }) => {
    const [showError, setShowError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');

    const price = parseInt(orderDetails.totalAmount);
    console.log('Price is ', price);
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
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
            console.log(paymentMethod);

            setShowError('');
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
            console.log(paymentIntent);
            toast.success("Payment is completed.");
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