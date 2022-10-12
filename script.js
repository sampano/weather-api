const searchCityInput = document.querySelector("#city-input");
const searchCityBtn = document.querySelector("button");

searchCityBtn.addEventListener("click", () => {
  searchCity();
});

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "05d8b5569bmsh7d39b8d088a45cfp121a31jsn817acc177fe6",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

const connectWeatherApi = async (Inputcity) => {
  //ASYNC FUNCTION RETURNS PROMISE
  const response = await fetch(
    `https://open-weather13.p.rapidapi.com/city/${Inputcity}`,
    options
  ); // AWAIT STOPS FETCH FROM ASSIGNING VALUE TO RESPONSE UNTIL THERE'S RESPONSE TO BE GIVEN
  const data = await response
    .json()
    .catch((err) => console.error("errors:" + err.message));

  getWeatherData(data);
};

function getWeatherData(data) {
  const city = data.name;
  const temp = data.main.temp;
  const tempmax = data.main.temp_max;
  const tempmin = data.main.temp_min;
  const weatherType = data.weather[0].main;
  showWeatherData(city, temp, tempmax, tempmin, weatherType);
}

const searchCity = () => {
  const inputCity = searchCityInput.value;

  if (inputCity != "") {
    connectWeatherApi(inputCity);
  } else {
    alert("Please provide a city.");
  }
};

const showWeatherData = (city, temp, tempmax, tempmin, weatherType) => {
  const h1 = document.querySelector("#weather-type");
  const h4 = document.querySelector("#city-name");
  const span1 = document.querySelector("#temp");
  const span2 = document.querySelector("#min-temp");
  const span3 = document.querySelector("#max-temp");

  h4.innerText = city;
  span1.innerText = temp;
  span2.innerText = tempmax;
  span3.innerText = tempmin;
  h1.innerText = weatherType;
};
