import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 3.2rem;
  background: ${({ theme }) => theme.colors.gray[100]};
`;  
