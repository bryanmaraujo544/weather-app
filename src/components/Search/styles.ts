import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100%;
  margin-bottom: 1.2rem;

  button {
    background: none;
    display: flex;
    align-items: center;
    width: 2.4rem;
    cursor: pointer;
    
    .icon {
      width: 100%;
      height: 100%;
      color: ${({ theme }) => theme.colors.gray[700]};
    }
  }

  input {
    color: ${({ theme }) => theme.colors.gray[700]};
    width: 100%;
    padding: 8px;
    outline: none;
    font-size: 1.6rem;
    font-weight: 600;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[700]};
      
    }

    @media(max-width: 1080px) {
      text-align: center;
    }
  }
`;