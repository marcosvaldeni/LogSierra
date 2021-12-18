import styled from 'styled-components';

export const FormContent = styled.div`
  h1 {
    margin: 2rem 3rem;
    margin-bottom: 1rem;
    cursor: pointer;
    font-weight: 900;
    font-size: 1.25rem;
    color: var(--purple-300);
    text-transform: uppercase;
  }

  form {
    width: 100%;

    > div {
      padding: 0.8rem;
      & + div {
        margin-top: 1rem;
      }
    }
    button {
      margin-top: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    form {
      > div {
        padding: 1rem;
      }
    }
  }
`;
