
const apiKey = "e98505b25ea3de747d5911d778759ac8";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function weather(city) {
    const res = await fetch(url + city + `&appid=${apiKey}`);

    if (res.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        const data = await res.json();
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        if (data.weather[0].main == "clouds") {
            weatherIcon.src = "img/clouds.png"
        }
        else if (data.weather[0].main == "clear") {
            weatherIcon.src = ".img/clear.png"
        }
        else if (data.weather[0].main == "drizzle") {
            weatherIcon.src = "img/drizzle.png"
        }
        else if (data.weather[0].main == "mist") {
            weatherIcon.src = "img/mist.png"
        }
        else if (data.weather[0].main == "rain") {
            weatherIcon.src = "img/rain.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "img/snow.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {
    weather(searchBox.value);
})