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

  ${({ hasBackground }) =>
    hasBackground &&
    css`
      background: ${({ theme }) => theme.colors.secondary};
      box-shadow: 0px 1px 23px -4px #000000;
    `}

  > button {
    height: 40px;
    width: 40px;
    margin-right: -40px;
    transition: ease 0.2s all;

    &:hover {
      transform: scale(1.3);
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
  }
`;
