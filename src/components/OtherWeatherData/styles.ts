import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 3.2rem 4.8rem;
  background: ${({ theme }) => theme.colors.gray[100]};
  gap: 3.2rem;
`;  

export const WeekWeather = styled.div`
  display: flex;
  width: 100%;
  gap: .8rem;
  margin-top: 1.6rem;

  .day {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .day-weather-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
    width: 100%;

    border-radius: 24px;
    padding: 1.4rem;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 1px 4px #00000005;

    img {
      height: 4.2rem;
    }

    .temperature-min-max {
      display: flex;
      gap: .6rem;
  
      .max, .min {
        font-size: 1.2rem;
        font-weight: 500;
      }
  
      .max {
        color: ${({ theme }) => theme.colors.gray[900]};
      }
  
      .min {
        color: ${({ theme }) => theme.colors.gray[300]};
      }
    }
  }

`;