import styled, { css } from 'styled-components';

interface ContainerProps {
  hasFocus: boolean;
}

export const Container = styled.label<ContainerProps>`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 14px;
  font-weight: bold;
  display: block;

  @media (min-width: 748px) {
    font-size: 20px;
  }

  > div {
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid #dededf;
    border-radius: 4px;
    display: flex;
    margin-top: 4px;
    padding: 0 16px;
    transition: ease 0.2s all;

    @media (min-width: 748px) {
      margin-top: 8px;
    }

    ${({ hasFocus }) =>
      hasFocus &&
      css`
        box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.colors.primary};
      `}

    input {
      padding: 8px 0px;
      flex: 1;
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.secondary};
      outline: none;

      @media (min-width: 748px) {
        font-size: 20px;
      }
    }
  }
`;
