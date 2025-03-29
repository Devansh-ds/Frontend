const apiKey = "ba1fd56700757f1bc46b1c33a99fe4fb";
const apiURl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiURl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    let temp = data.main.temp * 10;
    temp = Math.round(temp);
    temp = temp / 10;

    let windSpeed = data.wind.speed * 10;
    windSpeed = Math.round(windSpeed);
    windSpeed /= 10;

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = windSpeed + " km/h";

    //   if (data.weather[0].main == "Clouds") {
    //     weatherIcon.src = "images/clouds.png";
    //   }

    weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`;

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
