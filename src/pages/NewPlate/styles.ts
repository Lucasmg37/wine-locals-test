import styled from 'styled-components';

import { Container as DefaultInput } from '../../components/Inputs/Default/styles';

export const Container = styled.div`
  padding: 32px 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-width: 748px) {
    max-width: 748px;
    margin: 0 auto;
    width: 100%;
  }

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

  > form {
    flex: 1;
    display: flex;
    flex-direction: column;

    ${DefaultInput} {
      margin-bottom: 16px;

      @media (min-width: 748px) {
        margin-bottom: 24px;
      }
    }

    ${DefaultInput}:nth-child(2) {
      max-width: 160px;

      @media (min-width: 748px) {
        max-width: 260px;
      }

      > div > input {
        max-width: 80%;
      }
    }

    > button {
      margin-top: auto;
    }
  }
`;

export const DescriptionInfo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 16px;

  @media (min-width: 748px) {
    font-size: 18px;
    margin-top: 8px;
  }
`;
