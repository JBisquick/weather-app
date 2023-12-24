import { getWeatherData, getCurrentWeather, getHourlyData } from './weather';
import { loadCurrentWeather, loadHourlyWeather } from './dom.js';

async function loadPage() {
  try {
    const location = document.querySelector('.search-bar').value;
    const weatherData = await getWeatherData(location);
    const currentData = await getCurrentWeather(weatherData);
    const hourlyData = await getHourlyData(weatherData);

    loadCurrentWeather(currentData);
    loadHourlyWeather(hourlyData);
  } catch (error) {
    console.log(error);
  }
}

export { loadPage };