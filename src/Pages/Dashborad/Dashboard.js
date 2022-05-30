import React from 'react';
import { Col, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="container">
            <Row className="mt-4">
                <Col md={3} className="card p-3 text-white bg-light">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><NavLink to="my_orders" style={{ textDecoration: 'none' }} className="mb-3 text-dark">My Orders</NavLink></li>
                        <li className="list-group-item"><NavLink to="add_review" style={{ textDecoration: 'none' }} className="mb-3 text-dark">Add a Review</NavLink></li>
                        <li className="list-group-item"><NavLink to="my_profile" style={{ textDecoration: 'none' }} className="mb-3 text-dark">My Profile</NavLink></li>
                    </ul>
                    <div className="d-sm-none d-md-block d-none" style={{ minHeight: '60vh' }}></div>
                </Col>
                <Col md={9}>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;;