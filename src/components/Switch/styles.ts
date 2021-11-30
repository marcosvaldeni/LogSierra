import styled from 'styled-components';

export const Container = styled.div`
  width: 35px;
  height: 20px;
  border-radius: 30px;
  background: var(--green-700);
  transition: all 0.8s;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &.enabled {
    background: var(--green-700);
    > div {
      transform: translateX(97%);
      transition: transform 0.8s;
    }
  }
  &.disabled {
    background: var(--red-400);
    > div {
      transform: initial;
      transition: transform 0.8s;
    }
  }
`;

export const Switcher = styled.div`
  width: 16px;
  height: 16px;
  margin: 0 2px;
  border-radius: 50%;
  background: var(--white);
`;
