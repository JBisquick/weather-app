function loadCurrentWeather(data) {
  const container = document.querySelector('.current-content');
  container.innerHTML = '';

  const location = document.createElement('div');
  container.appendChild(location);
  location.textContent = data.name;

  const regionContainer = document.createElement('div');
  container.appendChild(regionContainer);
  regionContainer.classList.add('region-container');

  const region = document.createElement('div');
  regionContainer.appendChild(region);
  region.textContent = data.region;

  const country = document.createElement('div');
  regionContainer.appendChild(country);
  country.textContent = data.country;

  const weatherContainer = document.createElement('div');
  container.appendChild(weatherContainer);
  weatherContainer.classList.add('weather-container');

  const weather = document.createElement('div');
  regionContainer.appendChild(weather);
  weather.textContent = data.weather;

  const temp = document.createElement('div');
  regionContainer.appendChild(temp);
  temp.textContent = data.tempF + 'F';

  const weatherImg = document.createElement('img');
  container.appendChild(weatherImg);
  weatherImg.src = 'https:' + data.weatherImg;

  const time = document.createElement('div');
  container.appendChild(time);
  time.textContent = data.localTime;
}

function loadHourlyWeather(hourlyData) {
  const container = document.querySelector('.hourly-content');
  container.innerHTML = '';

  for (const hour of hourlyData) {
    const hourContainer = document.createElement('div');
    container.appendChild(hourContainer);
    hourContainer.classList.add('hour-container');

    const time = document.createElement('div');
    hourContainer.appendChild(time);
    time.textContent = hour.time;

    const image = document.createElement('img');
    hourContainer.appendChild(image);
    image.src = 'https:' + hour.icon;

    const temp = document.createElement('div');
    hourContainer.appendChild(temp);
    temp.textContent = hour.tempF;
  } 
}

function loadDailyWeather(dailyData) {
  const container = document.querySelector('.daily-content');
  container.innerHTML = '';

  for (const day of dailyData) {
    const dayContainer = document.createElement('div');
    container.appendChild(dayContainer);
    dayContainer.classList.add('day-container');

    const time = document.createElement('div');
    dayContainer.appendChild(time);
    time.textContent = day.date;

    const image = document.createElement('img');
    dayContainer.appendChild(image);
    image.src = 'https:' + day.icon;

    const lowTemp = document.createElement('div');
    dayContainer.appendChild(lowTemp);
    lowTemp.textContent = day.lowTemp;

    const highTemp = document.createElement('div');
    dayContainer.appendChild(highTemp);
    highTemp.textContent = day.highTemp;
  }
}

export { loadCurrentWeather, loadHourlyWeather, loadDailyWeather };
