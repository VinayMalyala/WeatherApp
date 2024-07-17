let apiKey = "c256adae061c249711dd124b57f9cc61";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	var data = await response.json();
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

	document.querySelector(".weather-icon").src = `images/${(data.weather[0].main).toLowerCase()}.png`
}


searchBtn.addEventListener("click", () => {
	const city = searchBox.value;
	checkWeather(city);
});

checkWeather("Visakhapatnam");