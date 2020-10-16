import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const SignInPage = ({ auth }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (event) => {
    const { value } = event.target;

    setLogin(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;

    setPassword(value);
  };

  const signIn = async () => {
    // console.log(login, password);

    // // const response = await fetch('/api/v1/auth/login', {
    // //   method: 'POST',
    // //   body: JSON.stringify({ login, password }),
    // // });
    // const response = await fetch(`https://api.github.com/users/${login}`);
    // const result = await response.json();

    // console.log(result);
    auth = true;
    console.log(auth);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2 className="text-center">Please sign in</h2>
          <Form>
            <Form.Group>
              <Form.Label>Login</Form.Label>
              <Form.Control onChange={handleLoginChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="password" onChange={handlePasswordChange} />
            </Form.Group>

            <Button
              block
              size="lg"
              onClick={signIn}
            >
              Sign In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
