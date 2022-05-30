import React from 'react';
import Banner from "./Banner/Banner";
import BusinessSummary from "./BusinessSummary/BusinessSummary";
import NewArrivals from "./NewArrivals/NewArrivals";
import Reviews from "./Reviews/Reviews";

const Homepage = () => {
    return (
        <div>
            <Banner></Banner>
            <NewArrivals></NewArrivals>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
        </div>
    );
};

export default Homepage;