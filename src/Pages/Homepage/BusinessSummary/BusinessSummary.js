import React from 'react';
import { Card, Col, Row } from "react-bootstrap";
import { UserGroupIcon } from '@heroicons/react/solid';
import { EyeIcon } from '@heroicons/react/solid';
import { CurrencyDollarIcon } from '@heroicons/react/solid';
import { CogIcon } from '@heroicons/react/solid';

const BusinessSummary = () => {
    return (
        <div className="container">
            <h2 className="text-center mb-3 mt-4"><span className="text-danger">Business</span> <span className="text-dark">Summary</span></h2>
            <Row xs={1} sm={2} lg={4} className="g-3">
                <Col>
                    <Card style={{ backgroundColor: '#EEEEEE' }}>
                        <Card.Body className="d-flex align-items-center justify-content-center">
                            <UserGroupIcon className="w-25 text-info" />
                            <div className="ms-4">
                                <Card.Title>20000+</Card.Title>
                                <Card.Text className="text-start text-truncate mb-0">Customers</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ backgroundColor: '#EEEEEE' }}>
                        <Card.Body className="d-flex align-items-center justify-content-center">
                            <EyeIcon className="w-25 text-info" />
                            <div className="ms-4">
                                <Card.Title>1500+</Card.Title>
                                <Card.Text className="text-start text-truncate mb-0">Daily Visits</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ backgroundColor: '#EEEEEE' }}>
                        <Card.Body className="d-flex align-items-center justify-content-center">
                            <CurrencyDollarIcon className="w-25 text-info" />
                            <div className="ms-4">
                                <Card.Title>5M+</Card.Title>
                                <Card.Text className="text-start text-truncate mb-0">Revenue/year</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ backgroundColor: '#EEEEEE' }}>
                        <Card.Body className="d-flex align-items-center justify-content-center">
                            <CogIcon className="w-25 text-info" />
                            <div className="ms-4">
                                <Card.Title>140+</Card.Title>
                                <Card.Text className="text-start text-truncate mb-0">Tools</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>

    );
};

export default BusinessSummary;