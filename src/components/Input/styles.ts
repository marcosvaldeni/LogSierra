import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 10px;
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--white);
  color: var(--gray-400);
  box-shadow: 3px 3px 20px 3px rgba(0, 0, 0, 0.03);

  display: flex;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: var(--red-400);
    `}

  ${props =>
    props.isFocused &&
    css`
      color: var(--purple-350);
      border-color: var(--purple-350);
    `}

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
      `}

    ${props =>
      props.isFilled &&
      css`
        color: var(--purple-350);
      `}
  }

  @media (min-width: 422px) {
    padding: 16px;
  }
`;

export const Error = styled(Tooltip)`
  svg {
    margin: 0;
  }

  span {
    background: var(--red-400);
    color: var(--white);

    &::before {
      border-color: var(--red-400) transparent;
    }
  }
`;
