let now = new Date();
let time = document.querySelector("#time");

let hours = now.getHours();
let minutes = String(now.getMinutes()).padStart(2, "0");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

let day = days[now.getDay()];

time.innerHTML = `${day}, ${hours}:${minutes}`;
///
function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function showTemperature(response) {
  let cityTemperature = document.querySelector("#temperature");
  console.log(cityTemperature);
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  cityTemperature.innerHTML = `${temperature} °C
  SUN ☀`;
}
function cityDisplay(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let showCity = document.querySelector("#city");
  showCity.innerHTML = `${cityInput.value}`;
  let apiKey = "aa22ab9168bfb952d8219da4fdb0c044";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", cityDisplay);
