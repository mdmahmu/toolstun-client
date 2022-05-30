import React, { useEffect } from 'react';
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import auth from "../../firebase.init";
import googleLogo from "../../Images/google.ico";

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    if (error) {
        alert(error.message);
    }

    if (loading) {
        return <Loading></Loading>;
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