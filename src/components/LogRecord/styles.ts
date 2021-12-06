import styled from 'styled-components';

export const LogRecord = styled.article`
  border-radius: 5px;
  border-left: 10px solid var(--purple-350);
  background: var(--purple-100);
  padding: 0.5rem 1rem;
  color: var(--black);
  display: flex;

  & + article {
    margin-top: 0.5rem;
  }

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    p:first-child {
      text-align: center;
      font-size: 0.6rem;
      line-height: 0.6rem;
    }

    p:nth-child(2) {
      font-weight: 700;
      font-size: 2rem;
      line-height: 1.8rem;
    }
  }

  div:nth-child(2) {
    align-items: center;
    font-weight: 100;
    display: flex;
    justify-content: center;
    flex: 1;

    p {
      margin: 0 auto;
    }

    > svg {
      color: var(--green-700);
      font-size: 1.6rem;
      margin-right: 0.4rem;
    }
  }
`;
