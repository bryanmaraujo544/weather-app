import styled from 'styled-components';
import { theme } from '../../styles/theme';

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

  .right-actions {
    display: flex;
    align-items: center;

    .dark-mode-container {
      width: 2.4rem;
      height: 2.4rem;
      position: relative;
      margin-left: 2rem;
      display: flex;
      align-items: center;

      img {
        width: 100%;
        object-fit: contain;
        position: absolute;
        cursor: pointer;
      }
    }
  }

  .temp-measurements {
    display: flex;
    gap: .4rem;
  }
  
  `;

export const Temp = styled.p<TempProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  color: ${({ isActive, theme }) => isActive ? theme.colors.white : theme.colors.black};
  cursor: pointer;
  font-weight: 600;
  
  .bg {
    background: ${({ theme }) => theme.colors.black};
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    z-index: 10;
  }

  p {
    z-index: 15;
  }
`;