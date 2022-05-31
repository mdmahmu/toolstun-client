import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const url = `http://localhost:5000/add_product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Product Added Successfully');
                e.target.reset();
            }
            );
    };

    return (
        <div>
            <h4 className="text-center text-danger">Add a Product</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50 mx-auto">
                <input className="mb-2" placeholder="Product Name" {...register("name")} required />

                <input className="mb-2" defaultValue={user?.email || user?.providerData[0]?.uid} type="text" placeholder="Email or uid" {...register("emailOrUid")} required readOnly />

                <input className="mb-2" placeholder="Product's Image URL" {...register("img")} required />

                <textarea placeholder="Product Description" style={{ resize: 'none' }} {...register("description")} rows="2" cols="23" className="mb-2" required />

                <input className="mb-2" placeholder="Price" type='number' step='0.01' {...register("price")} required />

                <input className="mb-2" placeholder="Quantity" type='number' {...register("quantity")} required />

                <input className="mb-2" placeholder="Minimum Order Quantity" type='number' {...register("minOrder")} required />
                <input className="mb-2 d-none" defaultValue={0} placeholder="Sold" type='number' {...register("sold")} required />

                <input className="mt-2 mb-4 bg-warning border-0 py-2" type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;