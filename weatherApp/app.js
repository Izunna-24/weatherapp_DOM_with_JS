const API_KEY = "65a2d5df0708cd403c79857a5be9470b";

const search = document.forms["search"];



search.addEventListener("submit",  (event) => {
    event.preventDefault();

    const city = document.getElementById("city").value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    getWeather(URL);

})

function displayWeather(data) {
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;

    const weather = document.getElementById('weather');
    weather.innerHTML = `
    <p>Temperature: ${temp}</p>
    <p>Humidity: ${humidity}</p>
    <p>Description: ${description}</p>
`

}

function getWeather(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayWeather(data);
    })
    .catch(error => {
        console.error(error);
    })
}