import styled from 'styled-components';
import { shade } from 'polished';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 100%;
      height: 3.5rem;
      margin-top: 1rem;

      background: #ffffff;
      border: 2px solid var(--white);
      border-radius: 10px;
      box-shadow: 3px 3px 20px 3px rgba(0, 0, 0, 0.03);

      & + input {
        margin-top: 2rem;
      }
    }

    button {
      width: 100%;
      height: 3.5rem;
      margin-top: 2rem;
      border-radius: 10px;
      border: none;
      background: linear-gradient(
        272.55deg,
        #7f56d8 -34.1%,
        rgba(89, 8, 161, 0.69) 152.79%
      );

      font-size: 1.75rem;
      font-weight: 900;
      color: var(--white);
      text-transform: uppercase;
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
