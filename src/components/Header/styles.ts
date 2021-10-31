import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    height: 5rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      position: relative;
      > img {
        margin-right: 10px;
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
      }

      span {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        position: absolute;

        right: 20%;

        bottom: 5%;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background: var(--white);

          svg {
            color: var(--purple-350);
          }
        }

        svg {
          font-size: 2rem;
          color: rgba(158, 177, 196, 0.4);
        }
      }
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

      > a {
        > svg {
          font-size: 1.6rem;
          color: var(--gray-100);
        }
      }
    }
  }

  a {
    > svg {
      font-size: 2rem;
      color: var(--gray-050);
    }
  }
`;
