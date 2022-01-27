import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
  padding: 3.2rem;
  background: ${({ theme }) => theme.colors.white};

  @media(min-height: 890px) {
    border-radius: 4.8rem 0 0 4.8rem;
  }

  @media(min-width: 1420px) {
    border-radius: 4.8rem 0 0 4.8rem;
  }

  hr {
    background: ${({ theme }) => theme.colors.gray[100]};
    height: .1rem;
    border-radius: 999px;
    width: 100%;
    margin: .8rem 0;
  }
`;

export const MainInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: .8rem;

  @media(max-width: 1080px) {
    align-items: center;
  }
  
  .icon {
    height: 15rem;
    width: 100%;
    text-align: left;

    @media(max-width: 1080px) {
      text-align: center;
    }
    
    img {
      height: 100%;
    }
  }

  .temperature {
    font-size: 5.6rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  .day-time {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray[500]};
    b {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gray[700]};
    }
  }
`;

export const OtherWeatherInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
    width: 100%;

    @media(max-width: 1080px) {
      justify-content: center;
    }

    .wind-icon {
      filter: ${({ theme }) => theme.title === 'light' ? 'invert(0)' : 'invert(100)'};
    }

    img {
      width: 3.6rem;

      &:nth-child(2) {
        background: red;
      }
    }

    .status-message {
      font-size: 1.4rem;
      font-weight: 500;
      margin-left: 1.2rem;
      color: ${({ theme }) => theme.colors.gray[900]};
    }
  }
`;

export const CityInfos = styled.div`
  background: yellow;
  position: relative;
  width: 100%;
  height: 10rem;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.6rem;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    z-index: 8;
    position: absolute;
    background: #00000065;
    border-radius: 24px;
  }
  .city-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
    z-index: 5;

  }

  .city-name {
    z-index: 10;
    font-size: 1.4rem;
    color: #fff;
    font-weight: 500;
  }
`;
