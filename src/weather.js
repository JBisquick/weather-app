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
    if (i < 24 && data.location.localtime_epoch < hour.time_epoch) {
      const time = hour.time;
      const icon = hour.condition.icon;
      const tempF = hour.temp_f;
      const hourData = { time, icon, tempF };
      nextDayHours.push(hourData);
      i++;
    }
  }
  return nextDayHours;
}

function getDailyData(data) {
  const dailyData = [];
  for (const day of data.forecast.forecastday) {
    const date = day.date;
    const icon = day.day.condition.icon;
    const highTemp = day.day.maxtemp_f;
    const lowTemp = day.day.mintemp_f;
    const dayData = { date, icon, highTemp, lowTemp };
    dailyData.push(dayData);
  }
  return dailyData;
}

export { getWeatherData, getCurrentWeather, getHourlyData, getDailyData };
