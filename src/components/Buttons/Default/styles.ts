import styled from 'styled-components';

export const Container = styled.button`
  color: #121212;
  background: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  padding: 14px 16px;
  border-radius: 4px;
  transition: ease 0.2s all;

  &:hover {
    opacity: 0.9;
  }
`;
