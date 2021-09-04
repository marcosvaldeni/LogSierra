import styled from 'styled-components';
import { shade } from 'polished';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  main {
    padding: 1rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

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
