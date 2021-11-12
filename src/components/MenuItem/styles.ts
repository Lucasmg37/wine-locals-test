import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 4px 16px #00000029;
  border-radius: 8px;
  padding: 16px 24px;
  flex: 1;
  position: relative;
  overflow: hidden;
  transition: ease 0.2s all;

  &:hover {
    transform: scale(1.02);
  }

  @media (min-width: 748px) {
    height: 100%;
    padding: 24px;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 8px;

    @media (min-width: 748px) {
      margin-bottom: 16px;
    }

    h2,
    h3 {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 16px;

      @media (min-width: 748px) {
        font-size: 24px;
      }
    }
  }

  p {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 300;
    font-size: 16px;

    @media (min-width: 748px) {
      font-size: 18px;
    }
  }
`;
