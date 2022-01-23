import styled from 'styled-components';

export const Container = styled.div`
  background: orange;
  height: 100%;
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 40rem 1fr;

  @media(max-width: 1580px){
    grid-template-columns: 30rem 1fr;
  }

  @media(max-width: 1280px) {
    grid-template-columns: 22.5rem 1fr;
  }

  @media(max-width: 1180px) {
    grid-template-columns: 1fr;
    
  }
`;