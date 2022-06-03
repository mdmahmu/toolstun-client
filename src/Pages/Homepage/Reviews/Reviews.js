import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import Review from "./Review/Review";
import Loading from "../../../Components/Loading/Loading";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Review/style.css";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://nameless-headland-97121.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews]);

    return (
        <div className="my-4">
            <h2 className="text-center"><span className="text-dark">Customer</span> <span className="text-danger">Reviews</span></h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    !reviews ? <Loading></Loading> :
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <Review key={review._id} review={review}></Review>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Reviews;