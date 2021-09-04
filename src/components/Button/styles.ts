import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 3.5rem;
  margin-top: 4rem;
  border-radius: 10px;
  border: none;
  background: linear-gradient(
    272.55deg,
    var(--purple-350) -34.1%,
    var(--purple-900) 152.79%
  );

  font-size: 1.75rem;
  font-weight: 900;
  color: var(--white);
  text-transform: uppercase;

  &:hover {
    background: ${shade(0.1, '#5908A1')};
  }
`;
