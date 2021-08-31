import React from 'react';

import { Container } from './styles';

type Props = {
  children?: JSX.Element[];
};

const Card: React.FC<Props> = ({ ...elements }) => {
  return <Container>{elements}</Container>;
};

export default Card;
