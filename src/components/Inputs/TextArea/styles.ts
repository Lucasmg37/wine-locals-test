import styled from 'styled-components';

export const Container = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 14px;
  font-weight: bold;
  display: block;

  > div:first-child {
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid #dededf;
    border-radius: 4px;
    display: flex;
    margin-top: 4px;

    textarea {
      padding: 8px 16px;
      flex: 1;
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.secondary};
      outline: none;
      height: 311px;
    }
  }
`;
