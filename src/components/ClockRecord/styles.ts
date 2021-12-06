import styled from 'styled-components';

export const ClockRecord = styled.article`
  border-radius: 5px;
  border-left: 10px solid var(--purple-350);
  background: var(--purple-100);
  padding: 0.5rem 1rem;
  color: var(--black);
  display: flex;
  justify-content: space-between;

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
    display: flex;
    align-items: center;
    font-weight: 100;

    > svg:first-child {
      color: var(--green-700);
      font-size: 1.6rem;
      margin-right: 0.4rem;
    }

    > svg {
      color: var(--red-400);
      font-size: 1.3rem;
      margin-left: 0.6rem;
      margin-right: 0.4rem;
    }

    p {
      & + p {
        padding-left: 0.5rem;
      }
    }
  }

  div:nth-child(3) {
    width: 5rem;
    align-items: center;
    font-weight: 100;
    color: var(--gray-100);
    display: flex;
    justify-content: flex-end;

    p {
      font-size: 0.8rem;
    }
  }
`;
