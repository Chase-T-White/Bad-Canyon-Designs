import React from "react";
import "./login.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
    navigate("/");
  };
  return (
    <main className="login">
      <header className="gallery-header">
        <h2 className="text-center">Login</h2>
      </header>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Username</Form.Label>
            <Form.Control type="email" placeholder="user@email.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="px-5 mb-5">
            Login
          </Button>
        </Form>
      </Container>
    </main>
  );
};

export default Login;
