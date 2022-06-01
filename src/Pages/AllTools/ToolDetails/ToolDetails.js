import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { NavLink, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const ToolDetails = () => {
    const [user] = useAuthState(auth);

    const { id } = useParams();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [tool, setTool] = useState({});
    const [boughtAmount, setBoughtAmount] = useState({});
    const [totalAmount, setTotalAmount] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/all_tools/${id}`)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [id]);


    const onSubmit = (data) => {
        const productId = tool?._id;
        const productName = tool?.name;
        Object.assign(data, { productId, productName, totalAmount });
        const url = `http://localhost:5000/place_order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                reset();
                toast.success('Order placed successfully');
            }
            );
    };

    const handleTotalAmount = (a, b) => {
        const total = a * b;
        setTotalAmount(total);
    };

    return (
        <div className="container">
            <div className="text-center my-4">
                <NavLink to='/all_tools'><Button variant="btn btn-outline-danger" className="px-4 py-2">Back to All Tools</Button></NavLink>
            </div>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <img src={tool.img} alt="item pic" className="w-100" />
                </Col>
                <Col>
                    <h1>{tool?.name}</h1>
                    <p>Description: {tool?.description}</p>
                    <h5>Price: {tool?.price}</h5>
                    <h5>Total Quantity: {tool?.quantity}</h5>
                    <h5>Already Sold: {tool?.sold}</h5>
                    <h5>Available stock: {tool.quantity - tool.sold}</h5>
                    <h5>Minimum quantity to order: {tool.minOrder}</h5>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-75 mx-auto">
                        <div className="text-center">
                            <p className="mb-1">Want to buy : </p>
                            <input className="ms-2" placeholder="Quantity" type='number' {...register("bought", { min: `${tool.minOrder}`, max: `${tool.quantity - tool.sold}` })} required onChange={(e) => setBoughtAmount(e.target.value)} onBlur={() => handleTotalAmount(tool.price, boughtAmount)} />
                            <p>
                                {errors.bought && "Please enter right quantity"}
                            </p>
                            <h5>Total Amount : {tool?.price * boughtAmount}</h5>
                            <hr />
                        </div>
                        <p>Your Name : {user.displayName ? user.displayName : <span className="text-danger">No name found. (update profile)</span>}</p>
                        <p>Your Email/Uid : {user?.email || user?.providerData[0]?.uid}</p>

                        <input className="mb-2" defaultValue={user?.email || user?.providerData[0]?.uid} type="text" placeholder="Email or uid" {...register("emailOrUid")} required readOnly />

                        <textarea placeholder="Your address" style={{ resize: 'none' }} {...register("address")} rows="2" cols="23" className="mb-2" required />

                        <input className="mb-2" placeholder="Phone number" {...register("phone")} type="text" required />
                        <div className="text-center">
                            {
                                tool?.quantity === 0 ? <Button variant="info" className="w-25" disabled>Place Order</Button> : <Button variant="info" type="submit" className="px-3 mb-4">Place Order</Button>
                            }
                        </div>
                    </form>
                </Col>
            </Row>

        </div>
    );
};

export default ToolDetails;