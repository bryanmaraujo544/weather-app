import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 1.6rem;
  padding: 3.2rem;
  background: ${({ theme }) => theme.colors.white};

  hr {
    background: #E7EBEF;
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
  .icon {
    height: 15rem;
    width: 100%;
    
    img {
      height: 100%;
    }
  }

  .temperature {
    font-size: 5.6rem;
    font-weight: 700;
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

    img {
      width: 3.6rem;
    }

    .status-message {
      font-size: 1.4rem;
      font-weight: 500;
      margin-left: 1.2rem;
    }
  }
`;

export const CityInfos = styled.div`
  background: yellow;
  position: relative;
  width: 100%;
  height: 10rem;
  border-radius: 32px;
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
    border-radius: 32px;

  }
  .city-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 32px;
    z-index: 5;

  }

  .city-name {
    z-index: 10;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }
`;
