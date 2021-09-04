import React from 'react';

import { Container } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <a href="/">Privacy Policy</a>
      <a href="/">
        Developed and Desgned by <b>Marcos Valdeni Lucas</b>
      </a>
    </Container>
  );
};

export default Card;
