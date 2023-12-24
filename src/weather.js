async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=fd47a39edec545f9bee222513232012&q=${location}&days=3`,
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
  const weather = data.current.condition.text;
  const weatherImg = data.current.condition.icon;
  const country = data.location.country;
  const region = data.location.region;
  const name = data.location.name;
  const localTime = data.location.localtime;

  return {
    tempF,
    weather,
    weatherImg,
    country,
    region,
    name,
    localTime,
  };
}

function getHourlyData(data) {
  const hoursToday = data.forecast.forecastday[0].hour;
  const hoursTomorrow = data.forecast.forecastday[1].hour;
  const hoursTogether = hoursToday.concat(hoursTomorrow);
  let nextDayHours = [];
  let i = 0;

  for (const hour of hoursTogether) {
    // to load only the next 24 hours
    if ((i < 24) && (data.location.localtime_epoch < hour.time_epoch)) {
      nextDayHours.push(hour);
      i++;
    }
  }
  
  return nextDayHours;
}

export { getWeatherData, getCurrentWeather, getHourlyData };
