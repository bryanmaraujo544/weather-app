import axios from 'axios';

export const getCityImageUrl = async (cityName: string) => {
  const { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=RJT1x1-rMlNOSeceNc_PJWdVfwI-DPcUzNFuydqKju4&page=1&per_page=1&query=${cityName}`) as any;
  const url = data.results[0].urls.small;
  return url;
}