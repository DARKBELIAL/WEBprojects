const apiKey = '2529d568bemsh8d94223abaed9f5p1aa138jsn66fd4de2c9c2';
const apiHost = 'weather-by-api-ninjas.p.rapidapi.com';

document.getElementById('search-btn').addEventListener('click', () => {
    const location = document.getElementById('location').value;
    getWeatherData(location);
});

function getWeatherData(location) {
    fetch(`https://${apiHost}/v1/weather?city=${location}`, {
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': apiHost
        }
    })
    .then(response => response.json())
    .then(data => {
        displayWeatherData(data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
}

function displayWeatherData(data) {
    const locationName = document.getElementById('location-name');
    const weatherData = document.getElementById('weather-data');

    locationName.textContent = data.city_name;
    weatherData.innerHTML = `
        Temperature: ${data.temp}°C<br>
        Humidity: ${data.humidity}%<br>
        Description: ${data.description}<br>
        Wind Speed: ${data.wind_speed} m/s
    `;
}
function displayWeatherData(data) {
  const locationName = document.getElementById('location-name');
  const weatherData = document.getElementById('weather-data');

  locationName.textContent = data.city_name;

  // Clear any previous Typed instance
  if (window.typedInstance) {
      window.typedInstance.destroy();
  }

  // Create a new Typed instance to display weather data
  const typedOptions = {
      strings: [
          `Temperature: ${data.temp}°C`,
          `Humidity: ${data.humidity}%`,
          `Description: ${data.description}`,
          `Wind Speed: ${data.wind_speed} m/s`
      ],
      typeSpeed: 50,
      showCursor: false, // Disable the blinking cursor
  };

  window.typedInstance = new Typed(weatherData, typedOptions);
}
