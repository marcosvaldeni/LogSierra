import styled from 'styled-components';

export const Container = styled.main`
  height: 50rem;
  width: 31rem;
  margin: 0 20px;

  background: var(--white);
  box-shadow: 4px 4px 30px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50px;

  @media (min-width: 422px) {
    margin: 0;
  }
`;
