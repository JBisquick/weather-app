import { getWeatherData, getCurrentWeather, getHourlyData, getDailyData } from './weather';
import { loadCurrentWeather, loadHourlyWeather, loadDailyWeather } from './dom.js';

async function loadPage() {
  try {
    const location = document.querySelector('.search-bar').value;
    const weatherData = await getWeatherData(location);
    const currentData = await getCurrentWeather(weatherData);
    const hourlyData = await getHourlyData(weatherData);
    const dailyData = await getDailyData(weatherData);

    loadCurrentWeather(currentData);
    loadHourlyWeather(hourlyData);
    loadDailyWeather(dailyData);
  } catch (error) {
    console.log(error);
  }
}

export { loadPage };