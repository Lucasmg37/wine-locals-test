import styled from 'styled-components';

export const Container = styled.button`
  color: #121212;
  background: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 15px;
  padding: 8px 16px;
  border-radius: 4px;
`;
