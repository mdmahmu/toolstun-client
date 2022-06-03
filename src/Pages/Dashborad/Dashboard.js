import React, { useEffect, useState } from 'react';
import { Col, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../../firebase.init";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const emailOrUid = user?.email || user?.providerData[0]?.uid;

    const [specificUser, setSpecificUser] = useState();
    useEffect(() => {
        const url = `https://nameless-headland-97121.herokuapp.com/user?emailOrUid=${emailOrUid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSpecificUser(data);
            });
    });

    return (
        <div className="container">
            <Row className="mt-4">
                <Col md={3} className="card p-3 text-white bg-light mb-4">
                    <ul className="list-group list-group-flush">
                        {
                            specificUser?.role ? <>
                                <li className="list-group-item"><NavLink to="manage_users" style={{ textDecoration: 'none' }} className="mb-3 text-dark">Manage Users</NavLink></li>

                                <li className="list-group-item"><NavLink to="add_product" style={{ textDecoration: 'none' }} className="mb-3 text-dark">Add a Product</NavLink></li>

                            </> : <>
                                <li className="list-group-item"><NavLink to="my_orders" style={{ textDecoration: 'none' }} className="mb-3 text-dark">My Orders</NavLink></li>

                                <li className="list-group-item"><NavLink to="add_review" style={{ textDecoration: 'none' }} className="mb-3 text-dark">Add a Review</NavLink></li>
                            </>
                        }
                        <li className="list-group-item"><NavLink to="my_profile" style={{ textDecoration: 'none' }} className="mb-3 text-dark">My Profile</NavLink></li>
                    </ul>
                    <div className="d-sm-none d-md-block d-none" style={{ minHeight: '60vh' }}></div>
                </Col>
                <Col md={9}>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </div >
    );
};

export default Dashboard;;