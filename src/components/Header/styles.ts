import styled from 'styled-components';

interface TempProps {
  isActive: boolean,
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 4px;

  h3 {
    position: relative;
    font-size: 2.2rem;
    color: ${({ theme }) => theme.colors.gray[900]};

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: .2rem;
      background: ${({ theme }) => theme.colors.gray[700]};
      border-radius: 999px;
    }
  }

  .temp-measurements {
    display: flex;
    gap: .8rem;
  }
  
  `;

export const Temp = styled.p<TempProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background: ${({ isActive }) => isActive ? '#000' : 'transparent'};
  color: ${({ isActive }) => isActive ? '#fff' : '#000'};
  cursor: pointer;
`;