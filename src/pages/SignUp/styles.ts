import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 30%;
    height: auto;
  }

  main {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      width: 100%;

      > div {
        margin-top: 1rem;

        & + div {
          margin-top: 2rem;
        }
      }

      > button {
        margin-top: 2rem;
      }
    }

    > a {
      margin-top: 1rem;

      font-size: 1.25rem;
      color: var(--purple-300);
    }
  }

  @media (min-width: 422px) {
    img {
      width: 40%;
    }

    main {
      padding: 1rem 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
