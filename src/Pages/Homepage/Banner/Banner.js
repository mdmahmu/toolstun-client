import React from 'react';
import { Carousel } from "react-bootstrap";
import banner1 from '../../../Images/Banner/banner1.png';
import banner2 from '../../../Images/Banner/banner2.png';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Super Power Tools</h3>
                        <p>Make Life Easier</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Top Quality Products</h3>
                        <p>New Collection Available</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;