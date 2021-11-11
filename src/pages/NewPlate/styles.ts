import styled from 'styled-components';

import { Container as DefaultInput } from '../../components/Inputs/Default/styles';

export const Container = styled.div`
  padding: 32px 24px;
  height: 100%;
  display: flex;
  flex-direction: column;

  > h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 36px;
    margin-bottom: 8px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: bold;
  }

  > form {
    flex: 1;
    display: flex;
    flex-direction: column;

    ${DefaultInput} {
      margin-bottom: 16px;
    }

    ${DefaultInput}:nth-child(2) {
      max-width: 160px;

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
`;
