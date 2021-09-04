import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.footer`
  width: 100%;
  margin-top: auto;

  display: flex;
  align-self: flex-end;
  flex-direction: column;
  align-items: center;

  a:first-child {
    margin-bottom: 2rem;
    color: var(--purple-200);
  }

  a:nth-child(2) {
    color: var(--purple-300);

    b {
      font-style: italic;
    }
  }
`;
