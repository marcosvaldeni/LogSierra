import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  main {
    padding: 1rem 10px;
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
        padding: 0.8rem;
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

  @media (min-width: 370px) {
    > main {
      padding: 1rem 1rem;

      > header {
        > img {
          height: 6rem;
        }

        > div {
          > img {
            height: 5rem;
            width: 5rem;
          }
        }
      }
    }
  }

  @media (min-width: 476px) {
    > main {
      padding: 1rem 1rem;

      > header {
        > img {
          height: 7rem;
        }

        > div {
          > img {
            height: 6rem;
            width: 6rem;
            margin-right: 1rem;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    > main {
      padding: 1rem 1rem;

      form {
        > div {
          padding: 1rem;
        }
      }
    }
  }
`;
