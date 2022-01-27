import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[300]};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(min-height: 800px) {
    padding: 48px;
  }
`;