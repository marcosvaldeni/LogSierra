import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40%;
    height: auto;
  }

  main {
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      margin-top: 1rem;

      & + div {
        margin-top: 2rem;
      }
    }

    button {
      margin-top: 2rem;
    }

    > a {
      margin-top: 1rem;

      font-size: 1.25rem;
      font-weight: 900;
      color: var(--purple-200);
      text-transform: uppercase;
    }
  }
`;
