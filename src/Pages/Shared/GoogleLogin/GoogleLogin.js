import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../Components/Loading/Loading";
import auth from "../../../firebase.init";
import googleLogo from "../../../Images/google.ico";

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token, setToken] = useState('');

    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            const emailOrUid = user.user.email || user?.user?.uid;

            // console.log(emailOrUid);
            fetch(`https://nameless-headland-97121.herokuapp.com/user`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ emailOrUid })
            })
                .then(res => res.json())
                .then(data => {

                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                });
        }
    });

    if (token) {
        navigate(from, { replace: true });
    }

    if (error) {
        toast.error(error.message);
    }

    if (loading) {
        return <Loading></Loading>;
    }

    if (user) {
        console.log(user);
    }
    return (
        <div>
            <div className="d-flex justify-content-center">
                <hr className="w-50" />
                <p className="ms-3 me-3 bold">OR</p>
                <hr className="w-50" />
            </div>
            <div className="d-flex justify-content-center">
                <Button variant="dark" onClick={() => signInWithGoogle()}> <img src={googleLogo} alt="google logo" /> Sign In With Google</Button>
            </div>
            <br />
        </div>
    );
};

export default GoogleLogin;