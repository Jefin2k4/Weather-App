//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=imperial
//2eb73a8adb9ba21a07876cb56e6db7f0

let API_KEY = "2eb73a8adb9ba21a07876cb56e6db7f0";

const getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const Full_url = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;
    return fetch(Full_url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("City not found!");
            }
            return response.json();
        });
};

function searchCity() {
    const city = document.getElementById("city-input").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    getWeatherData(city)
        .then((response) => {
            showWeatherData(response);
        })
        .catch((err) => {
            console.error(err);
            alert("Error fetching weather data. Please check the city name.");
        });
}

const showWeatherData = (WeatherData) => {
    document.getElementById("weather-type").innerText = WeatherData.weather[0].main;
    document.getElementById("temp").innerText = WeatherData.main.temp;
    document.getElementById("min-temp").innerText = WeatherData.main.temp_min;
    document.getElementById("max-temp").innerText = WeatherData.main.temp_max;
};
