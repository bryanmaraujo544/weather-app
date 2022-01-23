import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 40rem 1fr;

  @media(max-width: 1580px){
    grid-template-columns: 35rem 1fr;
  }

  @media(max-width: 1280px) {
    grid-template-columns: 30rem 1fr;
  }

  @media(max-width: 1080px) {
    grid-template-columns: 1fr;
    
  }
`;