import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  main {
    img {
      height: 30%;
    }

    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      width: 100%;

      > div {
        margin-top: 3rem;

        & + div {
          margin-top: 3rem;
        }
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
