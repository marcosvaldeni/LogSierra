import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  > main {
    padding: 1rem 10px;
    display: flex;
    flex-direction: column;
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

          > div {
            > h2 {
              margin-bottom: 0.7rem;
            }

            > h3 {
              margin-bottom: 0.7rem;
            }

            p {
              font-size: 0.7rem;
            }
          }
        }
      }
    }
  }
`;

export const Controller = styled.section`
  width: 100%;
  margin: 1rem 0;

  display: flex;

  > button {
    width: 100%;
    padding: 1rem 2rem;
    border: none;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--white);
    background: linear-gradient(
      272.55deg,
      var(--purple-350) -34.1%,
      rgba(89, 8, 161, 0.69) 152.79%
    );

    display: flex;
    justify-content: center;

    box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.03);
    border-radius: 10px;

    & + button {
      margin-left: 1rem;
    }
  }

  > button:disabled {
    cursor: default;
    color: var(--purple-900);
    background: var(--white);
  }

  @media (min-width: 476px) {
    > a {
      width: 10rem;
    }
  }
`;

export const Section = styled.section`
  overflow-y: auto;
  flex: 1;
  border-radius: 5px;
  margin-right: -6px;
  padding-right: 4px;

  &:hover {
    &::-webkit-scrollbar-thumb {
      background: var(--purple-900);
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    opacity: 0;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray-050);
    border-radius: 5px;
  }

  @media (min-width: 375px) {
    margin-right: -9px;
    padding-right: 4px;
  }

  @media (min-width: 576px) {
    margin-right: -10px;
    padding-right: 3px;
  }

  @media (min-width: 768px) {
    margin-right: -10px;
    padding-right: 4px;
  }

  @media (min-width: 992px) {
    margin-right: -12px;
    padding-right: 4px;
  }
`;

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
    align-items: center;
    font-weight: 100;
    color: var(--gray-100);
    display: flex;
  }
`;
