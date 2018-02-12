import axios from 'axios';

const API_KEY="51ce5e7953befb37b94c1281ba85d318";
const ROOT_URL=`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},in`;
  const request = axios.get(url);
  console.log('Request',request);
  return {
    type : FETCH_WEATHER,
    payload : request
  };
}
