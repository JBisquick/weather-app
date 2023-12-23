async function getCurrentData(location) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=fd47a39edec545f9bee222513232012&q=${location}`,
      { mode: 'cors' },
    );
    const weatherData = await response.json();
    console.log(weatherData);

    const tempF = weatherData.current.temp_f;
    const tempC = weatherData.current.temp_c;
    const weather = weatherData.current.condition.text;
    const weatherImg = weatherData.current.condition.icon;
    const country = weatherData.location.country;
    const region = weatherData.location.region;
    const name = weatherData.location.name;
    const localTime = weatherData.location.localtime;

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
  } catch (err) {
    console.log(err);
  }
}

export { getCurrentData };
