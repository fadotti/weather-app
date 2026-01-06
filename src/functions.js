export {displayWeather, getWeatherData}

function displayWeather(weatherObject) {
  document.querySelector('#weather-display > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
  .textContent = weatherObject.location;

  document.querySelector('#weather-display > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)')
  .textContent = weatherObject.dataDatetime;

  document.querySelector('#weather-display > div:nth-child(2) > div:nth-child(3) > div:nth-child(2)')
  .textContent = weatherObject.timezone;

  document.querySelector('#weather-display > div:nth-child(2) > div:nth-child(4) > div:nth-child(2)')
  .textContent = weatherObject.currentWeather;

  document.querySelector('#weather-display > div:nth-child(2) > div:nth-child(5) > div:nth-child(2)')
  .textContent = weatherObject.temperature;

  document.querySelector('#weather-display > div:nth-child(2) > div:nth-child(6) > div:nth-child(2)')
  .textContent = weatherObject.daytime;

  document.querySelector('#weather-display > div:nth-child(2) > div:nth-child(7) > div:nth-child(2)')
  .textContent = weatherObject.windspeed;
}

function getWeatherData(urlMetric, urlUs, dataMetric, dataUs, units) {
  fetch(urlMetric)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    dataMetric.location = response.resolvedAddress;
    dataMetric.dataDatetime = response.currentConditions.datetime;
    dataMetric.timezone = response.timezone;
    dataMetric.currentWeather = response.currentConditions.conditions;
    dataMetric.temperature = response.currentConditions.temp + '\u00B0C';
    dataMetric.daytime = response.currentConditions.sunrise + ' / ' + response.currentConditions.sunset;
    dataMetric.windspeed = response.currentConditions.windspeed + ' km/h';

    if (units == 'metric') {
      displayWeather(dataMetric);
    }
  })

  fetch(urlUs)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    dataUs.location = response.resolvedAddress;
    dataUs.dataDatetime = response.currentConditions.datetime;
    dataUs.timezone = response.timezone;
    dataUs.currentWeather = response.currentConditions.conditions;
    dataUs.temperature = response.currentConditions.temp + '\u00B0F';
    dataUs.daytime = response.currentConditions.sunrise + ' / ' + response.currentConditions.sunset;
    dataUs.windspeed = response.currentConditions.windspeed + ' mph';

    if (units != 'metric') {
      console.log('helloo???');
      console.log(dataUs);
      displayWeather(dataUs);
    }
  })
}