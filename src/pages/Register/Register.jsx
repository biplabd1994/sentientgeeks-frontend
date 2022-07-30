import React, { useState } from 'react'
import { NavLink, Navigate } from "react-router-dom";
import styles from './Register.module.css';
import { Container, Row, Col, Button, ButtonGroup, Dropdown, Form } from 'react-bootstrap';
import { register } from './Register.service';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleChange = (e) => {
        if (e.target.name === 'email') {
            setEmail(e.target.value);
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value);
        }
        if (e.target.name === 'name') {
            setName(e.target.value);
        }
    };
    const handleSubmit = async (e) => {
        console.log(name, email, password);
        let result = await register({ name, email, password });
        if (result.data.status === 200) {
            setSuccess('Registration Successful');
            setError('');
            setName('');
            setEmail('');
            setPassword('');
        } else {
            setError(result.data.errors[0].message);
            setSuccess('');
        }
    };
    return (
        <div>
            <Container >
                <Form>
                    <Row>
                        <Col md="12">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}
                        </Col>
                        <Col md="4">
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter Name" value={name} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" value={email} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
                            </Form.Group>

                        </Col>
                        <Col md="12">
                            <Button variant="primary" type="button" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default Register;