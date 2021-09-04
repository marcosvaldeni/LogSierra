import React from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';

import LogoSvg from '../../assets/logo.svg';

import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Card>
        <img src={LogoSvg} alt="LogSierra Logo" />
        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Login</Button>
        <div>
          <a href="/">Forgot Password</a>
          <a href="/">Sign Up</a>
        </div>
        <Footer />
      </Card>
    </Container>
  );
};

export default SignIn;
