async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=fd47a39edec545f9bee222513232012&q=${location}&dasy=3`,
      { mode: 'cors' },
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch {
    console.log(err);
  }
}

function getCurrentWeather(data) {
  const tempF = data.current.temp_f;
  const tempC = data.current.temp_c;
  const weather = data.current.condition.text;
  const weatherImg = data.current.condition.icon;
  const country = data.location.country;
  const region = data.location.region;
  const name = data.location.name;
  const localTime = data.location.localtime;

  return {
    tempF,
    tempC,
    weather,
    weatherImg,
    country,
    region,
    name,
    localTime,
  };
}

async function getHourlyData(data) {
  
}

export { getWeatherData, getCurrentWeather };
