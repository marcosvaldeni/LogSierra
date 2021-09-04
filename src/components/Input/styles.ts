import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--white);
  color: var(--gray-400);
  box-shadow: 3px 3px 20px 3px rgba(0, 0, 0, 0.03);

  input {
    margin: auto 0;
    flex: 1;
    background: transparent;
    border: 0;
    color: var(--gray-600);

    &::placeholder {
      margin-top: 5px;
      color: var(--gray-400);
    }
  }

  svg {
    margin-right: 1rem;
    color: var(--gray-400);
  }
`;
