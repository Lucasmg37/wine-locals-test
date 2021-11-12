import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 24px 92px;
  flex: 1;
  height: 100%;

  > h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 36px;
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: bold;

    @media (min-width: 748px) {
      font-size: 48px;
    }
  }

  > p {
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 300;
    margin-bottom: 16px;

    @media (min-width: 748px) {
      margin-bottom: 40px;
      font-size: 24px;
    }
  }

  > ul {
    display: flex;
    flex-direction: column;

    @media (min-width: 748px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      grid-gap: 64px;
    }

    li {
      & + li {
        margin-top: 16px;

        @media (min-width: 748px) {
          margin-top: 0;
        }
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
  transition: ease 0.2s all;

  &:hover {
    transform: scale(1.1);
  }

  > svg {
    height: 20px;
    width: auto;

    & path {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
