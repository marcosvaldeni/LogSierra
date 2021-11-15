import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  main {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;

    > a {
      margin: 1rem 0;
      margin-left: 2rem;
      font-weight: 900;
      font-size: 1.25rem;
      color: var(--purple-300);
      text-transform: uppercase;
    }

    form {
      width: 100%;

      > div {
        padding: 1rem;
        & + div {
          margin-top: 1rem;
        }
      }
      button {
        margin-top: 1.5rem;
      }
    }

    > div {
      width: 100%;
      margin-top: 3rem;

      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      a {
        font-size: 1.25rem;
        font-weight: 900;
        color: var(--purple-200);
        text-transform: uppercase;
      }
    }
  }
`;
