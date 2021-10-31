import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  > main {
    padding: 1.5rem 10px;

    > header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      > img {
        height: 5rem;
      }

      > div {
        margin-top: 1rem;
        display: flex;
        align-items: center;

        > img {
          margin-right: 10px;
          height: 4rem;
          width: 4rem;
          border-radius: 50%;
        }

        > div {
          > h2 {
            margin-bottom: 7px;
            font-size: 1rem;
            font-weight: 700;
            color: var(--gray-600);
          }

          > h3 {
            margin-bottom: 7px;
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--gray-400);
          }

          > div {
            display: flex;
            align-items: center;

            p {
              font-size: 0.7rem;
              font-weight: 700;
              color: var(--gray-100);
            }
          }
        }

        > div:nth-child(3) {
          margin-top: 0.5rem;
          padding-left: 0.5rem;
          align-self: flex-start;

          > svg {
            font-size: 1.6rem;
            color: var(--gray-100);
          }
        }
      }
    }
  }

  @media (min-width: 370px) {
    > main {
      padding: 2rem 1rem;

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
      padding: 2rem 1rem;

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
  margin-top: 3rem;
  margin-bottom: 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
    > svg {
      margin-left: 2rem;
      font-size: 1.6rem;
      color: var(--gray-100);

      &:hover {
        color: var(--purple-900);
      }
    }
  }

  > div {
    display: flex;

    > a {
      width: 7rem;
      padding: 1rem 2rem;
      font-size: 1.1rem;
      font-weight: 700;
      display: flex;
      justify-content: center;

      box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.03);
      border-radius: 10px;

      & + a {
        margin-left: 1rem;
      }
    }

    > a:first-child {
      color: var(--white);
      background: linear-gradient(
        272.55deg,
        var(--purple-350) -34.1%,
        rgba(89, 8, 161, 0.69) 152.79%
      );
    }

    > a:nth-child(2) {
      color: var(--purple-900);
      background: var(--white);
    }
  }

  @media (min-width: 476px) {
    > div {
      > a {
        width: 10rem;
      }
    }
  }
`;

export const Logs = styled.article`
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
