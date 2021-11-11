import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 24px;

  > h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 36px;
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: bold;
  }

  > p {
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 300;
    margin-bottom: 16px;
  }

  > ul {
    display: flex;
    flex-direction: column;

    li {
      & + li {
        margin-top: 16px;
      }
    }
  }
`;

export const FloatButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  position: fixed;
  bottom: 32px;
  right: 40px;

  > svg {
    height: 20px;
    width: auto;

    & path {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
