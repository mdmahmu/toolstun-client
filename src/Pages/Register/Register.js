import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Register = () => {
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [agree, setAgree] = useState(false);

    const handleRegister = event => {
    };

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
                            <Form.Control type="email" name="email" placeholder="Enter email" />
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
            </div>
        </div>
    );
};

export default Register;