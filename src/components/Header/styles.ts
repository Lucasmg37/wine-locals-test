import styled, { css } from 'styled-components';

interface ContainerProps {
  hasBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 24px 16px;
  display: flex;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0;
  transition: ease all 0.2s;
  z-index: 2;

  ${({ hasBackground }) =>
    hasBackground &&
    css`
      background: ${({ theme }) => theme.colors.secondary};
      box-shadow: 0px 1px 23px -4px #000000;

      @media (min-width: 748px) {
        background: none;
        box-shadow: none;
      }
    `}

  @media (min-width: 748px) {
    position: static;
    padding: 40px 16px;
  }

  > button {
    height: 40px;
    width: 40px;
    margin-right: -40px;
    transition: ease 0.2s all;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      transform: scale(1.3);
    }

    @media (min-width: 748px) {
      width: auto;

      &:hover {
        transform: scale(1.06);
      }
    }

    span {
      display: none;

      @media (min-width: 748px) {
        display: block;
        color: ${({ theme }) => theme.colors.white};
        font-size: 20px;
        opacity: 0;
        transition: ease 0.2s all;
        transform: translateX(-10px);

        &:hover {
          opacity: 1;
          transform: translateX(0px);
        }
      }
    }

    > svg {
      stroke: ${({ theme }) => theme.colors.white};
      height: 32px;
      width: auto;
    }
  }

  > svg {
    margin: auto;
    height: 30px;
    width: auto;

    @media (min-width: 748px) {
      margin: auto 0 auto auto;
    }
  }
`;
