import { getWeatherData, getCurrentWeather } from './weather';
import { loadCurrentWeather } from './dom.js';

async function loadPage() {
  try {
    const location = document.querySelector('.search-bar').value;
    const weatherData = await getWeatherData(location);
    const currentData = await getCurrentWeather(weatherData);

    loadCurrentWeather(currentData);
  } catch (error) {
    console.log(error);
  }
}

export { loadPage };