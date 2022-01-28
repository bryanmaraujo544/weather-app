import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40rem 1fr;
  height: 100%;
  width: 100%;
  max-height: 750px;
  max-width: 1420px;

  @media(min-height: 800px) {
    border-radius: 4.8rem;
  }

  @media(min-width: 1420px) {
    border-radius: 4.8rem;
  }

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