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
  temp.textContent = data.tempF;

  const weatherImg = document.createElement('img');
  container.appendChild(weatherImg);
  weatherImg.src = 'https:' + data.weatherImg;

  const time = document.createElement('div');
  container.appendChild(time);
  time.textContent = data.localTime;
}

export { loadCurrentWeather };
