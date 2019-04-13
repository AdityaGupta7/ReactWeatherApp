import axios from 'axios';
const API_KEY='aeb41e71149fcfc1bfb7d9565a2fd39d';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}?q=${city},us&appid=${API_KEY}`;//we can only search cities in the us, we can change it for any country
  //to make ajax requests run 'npm install --save axios'; works similar to jQuery
  const request = axios.get(url); //making an ajax request, this returns a promise
  
  return(//an action (fetchWeather) always returns an object:
    {type: FETCH_WEATHER, //type is always required!
    payload: request} //passing the promise to action's payload
  );
}
//middleware resolves the promise if the value of payload is a promise. middleware can see through actionCreator
//before actionCreator reaches reducers; and that's why we get json result when we console log the action in
//reducer_weather.js. It is like this because then reducers can handle normal data (and not a promise)
