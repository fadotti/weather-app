import "./style.css";
import { displayWeather, getWeatherData } from "./functions";

const metricData = {};
const usData = {};
let metricURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Cordoba,arg/?key=7ZQTVAGNEFPPU5VUJUZ7NCNV8&unitGroup=metric';
let usURL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Cordoba,arg/?key=7ZQTVAGNEFPPU5VUJUZ7NCNV8';
let currentUnits = 'metric';

getWeatherData(metricURL, usURL, metricData, usData, currentUnits);

const unitsButton = document.querySelector('#weather-display > div:nth-child(1) > button');
unitsButton.addEventListener('click', () => {
  console.log(metricData);
  console.log(usData);
  if(currentUnits == 'metric') {
    displayWeather(usData);
    currentUnits = 'us';
    unitsButton.className = 'fahrenheit';
  } else {
    displayWeather(metricData);
    currentUnits = 'metric';
    unitsButton.className = 'celsius';
  }
  console.log(currentUnits);
})

const locationInput = document.querySelector('input');
const displayButton = document.querySelector('#search-box button');

displayButton.addEventListener('click', () => {
  metricURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput.value}/?key=7ZQTVAGNEFPPU5VUJUZ7NCNV8&unitGroup=metric`;
  usURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationInput.value}/?key=7ZQTVAGNEFPPU5VUJUZ7NCNV8`;

  getWeatherData(metricURL, usURL, metricData, usData, currentUnits)
})