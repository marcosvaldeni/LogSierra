import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 35px;
  height: 20px;
  margin-right: 10px;
  padding: 0 2px;
  border-radius: 30px;
  background: var(--green-700);

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Switcher = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--white);
`;
