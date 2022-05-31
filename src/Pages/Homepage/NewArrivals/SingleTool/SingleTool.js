import React from 'react';
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleTools = ({ tool }) => {
    const { name, img, description, price, quantity, sold } = tool;
    const navigate = useNavigate();
    const navigateToItemDetail = id => {
        navigate(`/all_tools/${id}`);
    };

    return (
        <Col>
            <Card className="border border-2 border-dark">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="text-start text-truncate mb-0">{description}</Card.Text>
                    <Card.Text className="text-start m-0">
                        Price: {price}
                    </Card.Text>
                    <Card.Text className="text-start m-0">
                        Quantity: {quantity}
                    </Card.Text>
                    <Card.Text className="text-start">
                        Already sold: {sold}
                    </Card.Text>

                    <div className="text-center">
                        <Button onClick={() => navigateToItemDetail(tool._id)} variant="dark" className="px-4">Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleTools;