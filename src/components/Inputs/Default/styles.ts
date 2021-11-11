import styled from 'styled-components';

export const Container = styled.label`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 14px;
  font-weight: bold;
  display: block;

  > div {
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid #dededf;
    border-radius: 4px;
    display: flex;
    margin-top: 4px;
    padding: 0 16px;

    input {
      padding: 8px 0px;
      flex: 1;
      font-size: 16px;
      font-family: ${({ theme }) => theme.fonts.secondary};
      outline: none;
    }
  }
`;
