// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(''); 

    
    if (email === 'admin@levelup.cl' && password === 'admin123') {
      login(email, 'admin'); 
      navigate('/admin'); 
    } else if (email.length > 0 && password.length > 0) { 
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Por favor, ingresa un email válido.');
            return;
        }
      login(email, 'user');
      navigate('/'); 
    } else {
      setError('Email o contraseña inválidos.');
    }
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <div style={{ maxWidth: '400px', width: '100%', backgroundColor: '#1f2833', padding: '30px', borderRadius: '15px' }}>
        <h2 className="text-center mb-4" style={{ color: '#66fcf1' }}>Iniciar Sesión</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: '#c5c6c7' }}>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ backgroundColor: '#0b0c10', color: '#fff', border: '1px solid #45a29e' }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: '#c5c6c7' }}>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ backgroundColor: '#0b0c10', color: '#fff', border: '1px solid #45a29e' }}
            />
          </Form.Group>

          <Button variant="info" type="submit" className="w-100 mt-3" style={{ fontWeight: 'bold' }}>
            Ingresar
          </Button>
        </Form>
        <div className="text-center mt-3">
            <span style={{ color: '#c5c6c7' }}>¿No tienes cuenta? </span>
            <a href="/register" style={{ color: '#66fcf1' }}>Regístrate</a>
        </div>
      </div>
    </Container>
  );
};

export default LoginPage;