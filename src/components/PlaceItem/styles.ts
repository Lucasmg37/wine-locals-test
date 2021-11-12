import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (min-width: 748px) {
    position: relative;
    gap: 0px;
    height: 100%;
  }

  > button:first-child {
    background: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0px 4px 16px #00000029;
    border-radius: 8px;
    padding: 16px;
    font-size: 16px;
    flex: 1;
    text-align: left;
    transition: ease 0.2s all;

    @media (min-width: 748px) {
      padding: 24px;
      font-size: 20px;
      height: 100%;
    }

    &:hover {
      transform: scale(1.02);
    }

    h2 {
      font-family: ${({ theme }) => theme.fonts.primary};
    }

    p {
      font-family: ${({ theme }) => theme.fonts.secondary};
    }
  }

  > button:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    width: 36px;
    height: 36px;
    margin-right: 12px;
    color: ${({ theme }) => theme.colors.white};
    transition: ease 0.2s all;

    @media (min-width: 748px) {
      position: absolute;
      right: 24px;
    }

    &:hover {
      transform: scale(1.1);
      background: ${({ theme }) => theme.colors.white};

      > svg,
      path {
        fill: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
