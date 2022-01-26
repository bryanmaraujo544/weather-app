import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 3.2rem 4.8rem;
  background: ${({ theme }) => theme.colors.gray[100]};
  gap: 4.2rem;

  
  @media(max-width: 768px) {
    overflow-x: hidden;
  }
`;  

export const WeekWeather = styled.div`
  display: flex;
  width: 100%;
  gap: .8rem;
  margin-top: .8rem;

  @media(max-width: 768px) {
    overflow-x: scroll;
  }

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

    border-radius: 20px;
    padding: 1.4rem;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 1px 4px #00000005;

    @media(max-width: 768px) {
      flex: 1;
    }

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

export const TodayHighlights = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  flex: 1;

  .title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .hightlights {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
    height: 100%;

    .hightlight-card {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      gap: .8rem;

      padding: 2rem;
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 2px 5px #00000005;
      

      .min-max {
        display: flex;
        gap: 1.0rem;

        .temp {
          font-size: 1.8rem;
          font-weight: 600;

          &:nth-child(2){
            color: ${({ theme }) => theme.colors.gray[300]};
          }
        }
      }
      .highlight-title {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.gray[500]};
        font-weight: 500;
      }
      
      .value {
        font-size: 3.2rem;
        color: ${({ theme }) => theme.colors.gray[900]};
        font-weight: 500;

        b {
          font-size: 1.4rem;
          font-weight: 500;
        }
        
      }
      
      img {
        height: 2.0rem;
      }
      
      

      & + .sun {
        justify-content: flex-start;
      }

      .sun-infos {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        &:nth-child(1){ 
          margin-top: .4rem;
        }

        &:nth-child(2){ 
          margin-top: .8rem;
        }

        .icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 3.2rem;
          height: 3.2rem;
          padding: .6rem;
          background: ${({ theme }) => theme.colors.yellow[100]};

          .icon {
            color: #fff;
            height: 100%;
            width: 100%;
          }
        }

        .time {
          font-size: 1.4rem;
          font-weight: 600;
        }
      }

    }
  }
`;