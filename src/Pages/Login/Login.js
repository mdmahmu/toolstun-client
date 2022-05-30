import React from 'react';
import { Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    };

    const handleResetPassword = event => {
        event.preventDefault();
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
                <h2 className="text-center">LOGIN FORM</h2>

                <div className="w-50 mx-auto p-4">
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="danger" type="submit">
                            Login
                        </Button>
                    </Form>
                    <br />
                    <p>Forgot password ?<Button variant="link" className="text-decoration-none text-danger" onClick={handleResetPassword}>Click here to reset</Button></p>
                    <p>New to ToolsTun ? <NavLink to='/register' className="text-danger text-decoration-none" >Create an account</NavLink></p>
                </div>
            </div>
        </div>
    );
};
export default Login;