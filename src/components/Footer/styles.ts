import styled from 'styled-components';

export const Container = styled.footer`
  width: 170px;
  margin-top: auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  a:first-child {
    margin: 1rem 0;
    color: var(--purple-200);
  }

  a:nth-child(2) {
    color: var(--purple-300);

    b {
      font-style: italic;
    }
  }

  @media (min-width: 422px) {
    width: 100%;
  }
`;
