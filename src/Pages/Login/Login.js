import React, { useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../Components/Loading/Loading";
import auth from "../../firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    const handleLogin = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);
        if (error) {
            alert(error.message);
        }
    };

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    const handleResetPassword = async event => {
        event.preventDefault();
        if (email) {
            await sendPasswordResetEmail(email);
            if (error2) {
                alert(error2.message);
            } else {
                toast.success('Email has been sent');
            }
        }
        else {
            toast.error('Enter your email first');
        }
    };

    if (loading) {
        return <Loading></Loading>;
    }

    if (sending) {
        return <h2 className="text-center my-5 text-dark">Sending...</h2>;
    }

    const myStyle = {
        backgroundImage:
            "url('https://i.ibb.co/bmb3ypw/bg.jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div style={myStyle}>
            <div className="container">
                <h2 className="text-center mt-2">LOGIN FORM</h2>

                <div className="w-50 mx-auto pt-2">
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Button variant="danger" type="submit">
                            Login
                        </Button>
                    </Form>
                    <br />
                    <p>Forgot password ?<Button variant="link" className="text-decoration-none text-danger" onClick={handleResetPassword}>Click here to reset</Button></p>
                    <p>New to ToolsTun ? <NavLink to='/register' className="text-danger text-decoration-none" >Create an account</NavLink></p>
                </div>
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
    );
};
export default Login;