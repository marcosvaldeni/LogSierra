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

  @media (min-width: 476px) {
    > a {
      width: 10rem;
    }
  }
`;
