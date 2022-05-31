import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Rating from 'react-rating';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const [rating, setRating] = useState(0);

    const onSubmit = (data) => {
        Object.assign(data, { rating });
        console.log(data);
        const url = `http://localhost:5000/add_review`;
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
                setRating(0);
            }
            );
    };

    return (
        <div>
            <h4 className="text-center text-danger mb-4">Please Give Your Review</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50 mx-auto">
                <input className="mb-2" placeholder="Name" {...register("name")} required />

                <input className="mb-2" defaultValue={user?.email || user?.providerData[0]?.uid} type="text" placeholder="Email or uid" {...register("emailOrUid")} required readOnly />

                <input className="mb-2" defaultValue={user?.photoURL} placeholder="Image URL" {...register("img")} required />

                <textarea placeholder="Enter your review" style={{ resize: 'none' }} {...register("review")} rows="2" cols="23" className="mb-2" required />
                <div className="d-flex align-items-center flex-sm-row flex-column mb-1">
                    <h4 className="m-0 p-0">RATING : </h4>

                    <Rating className="ms-2"
                        emptySymbol={<img src="https://i.ibb.co/SQYXH4Z/star-empty.png" className="icon w-75" alt="empty star" />}

                        fullSymbol={<img src="https://i.ibb.co/0nBL5nd/starFull.png" className="icon w-75" alt="full star" />} onChange={(rate) => setRating(rate)}
                    />
                </div>

                <input className="mt-2 mb-4 bg-info border-0 py-2" type="submit" value='Add Review' />
            </form>
        </div>
    );
};

export default AddReview;