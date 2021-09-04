import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
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

    &::placeholder {
      margin-top: 5px;
      color: var(--gray-400);
    }
  }

  svg {
    margin-right: 1rem;
  }

  input,
  svg {
    ${props =>
      props.isFocused &&
      css`
        color: var(--purple-350);
        border-color: var(--purple-350);
      `}

    ${props =>
      props.isFilled &&
      css`
        color: var(--purple-350);
      `}
  }
`;
