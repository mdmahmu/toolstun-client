import React, { useEffect, useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import GoogleLogin from "../Shared/GoogleLogin/GoogleLogin";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    const handleRegister = event => {
        event.preventDefault();

        if (password === confirmedPassword) {
            createUserWithEmailAndPassword(email, password);
            if (error) {
                alert(error.message);
            }
        }
    };

    if (loading) {
        return <Loading></Loading>;
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
                <h2 className="text-center pt-3 mb-3">REGISTRATION FORM</h2>
                <div className="w-50 mx-auto p-4" style={{ backgroundColor: "white" }}>
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicConfirmedPassword">
                            <Form.Label>Confirmed password</Form.Label>
                            <Form.Control type="password" name="confirmedPassword" placeholder="Confirmed password" onChange={(e) => setConfirmedPassword(e.target.value)} />
                            <Form.Text className="text-danger">
                                {(password !== confirmedPassword) ? 'Both password did not match' : ''}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree to the terms & conditions" onClick={() => setAgree(!agree)} />
                        </Form.Group>
                        {
                            agree ? <Button variant="danger" type="submit" className="px-3">Register</Button> : <Button variant="light" type="submit" className="px-3" disabled>Register</Button>
                        }
                    </Form>
                    <br />
                    <p className="m-0">Already registered ? <NavLink to='/login' className="text-danger text-decoration-none" >Login</NavLink>
                    </p>
                </div>
                <br />
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
    );
};

export default Register;