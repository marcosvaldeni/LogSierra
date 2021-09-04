import React from 'react';

import { Container } from './styles';

type Props = {
  children: JSX.Element[] | JSX.Element;
};

const Card: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

export default Card;
