import "./style.css";

fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Cordoba,espana/?key=7ZQTVAGNEFPPU5VUJUZ7NCNV8")
.then(function(response) {
  return response.json();
})
.then(function(response) {
  console.log(response);
})