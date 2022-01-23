import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 3.2rem;
  background: ${({ theme }) => theme.colors.white};
`;

export const MainInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;

  .icon {
    height: 12.8rem;
    width: 100%;
    
    img {
      height: 100%;
    }
  }

  .temperature {
    font-size: 6.4rem;
  }
`;
