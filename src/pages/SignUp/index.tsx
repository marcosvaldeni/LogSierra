import React from 'react';
// import { FiLogIn } from 'react-icons/fi';

import Card from '../../components/Card';
import Footer from '../../components/Footer';

import { Container } from './styles';

import LogoSvg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Card>
        <img src={LogoSvg} alt="LogSierra Logo" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button type="button">Sign Up</button>
        <a href="/">Back</a>
        <Footer />
      </Card>
    </Container>
  );
};

export default SignIn;
