import styled from 'styled-components';

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
