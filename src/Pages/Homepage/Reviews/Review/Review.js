import React from 'react';
import { Card } from "react-bootstrap";
import Rating from "react-rating";

const Review = ({ review }) => {
    const { name, img, rating } = review;
    return (
        <Card>
            <div className="text-center d-flex justify-content-center mt-3">
                <img src={img} alt="pic" className="rounded-circle border border-4 border-info w-50" />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{review.review}
                </Card.Text>
                <div className="text-center mb-1">
                    <Rating className="ms-2 mt-2" placeholderRating={rating}
                        emptySymbol={<img src="https://i.ibb.co/SQYXH4Z/star-empty.png" className="icon w-75" alt="empty star" />} placeholderSymbol={<img src="https://i.ibb.co/0nBL5nd/starFull.png" className="icon w-75" alt="full star" />}
                        fullSymbol={<img src="https://i.ibb.co/0nBL5nd/starFull.png" className="icon w-75" alt="full star" readonly />} readonly
                    />
                </div>
            </Card.Body>

        </Card>
    );
};

export default Review;;