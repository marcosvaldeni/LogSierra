import React from 'react';

import { Container, Switcher } from './styles';

interface Props {
  handleActivation(): void;
  active: boolean;
}

const Switch: React.FC<Props> = ({ handleActivation, active }) => {
  return (
    <Container
      onClick={handleActivation}
      className={`${active ? 'enabled' : 'disabled'}`}
    >
      <Switcher />
    </Container>
  );
};

export default Switch;
