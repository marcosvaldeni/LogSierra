import React from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

import LogoSvg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Card>
        <img src={LogoSvg} alt="LogSierra Logo" />
        <Input name="name" icon={FiUser} placeholder="Name" />
        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Password"
        />
        <Input
          name="password_confirmation"
          icon={FiLock}
          type="password"
          placeholder="Password confirmation"
        />
        <Button type="submit">Sign Up</Button>
        <a href="/">Back</a>
        <Footer />
      </Card>
    </Container>
  );
};

export default SignIn;
