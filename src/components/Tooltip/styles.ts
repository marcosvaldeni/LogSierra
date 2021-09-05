import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: var(--red-400);
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;
    text-align: center;

    position: absolute;
    bottom: calc(100% + 7px);
    left: -40px;
    transform: translateX(-50%);

    color: var(--white);
    &::before {
      content: '';
      border-style: solid;
      border-color: var(--red-400) transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 82%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }

  @media (min-width: 422px) {
    span {
      bottom: calc(100% + 12px);
      left: 50%;

      &::before {
        left: 50%;
      }
    }
  }
`;
