const displayArea = document.querySelector('.result');

const contentLoader = (response) => {
  displayArea.innerHTML = '';

  const cityInfo = document.createElement('div');
  cityInfo.classList.add('city-info');

  const location = document.createElement('h3');
  location.innerText = response.name;

  const temperature = document.createElement('h3');
  temperature.classList.add('temp');
  temperature.innerHTML = `${Math.floor(response.main.temp)}<span>&#xb0;</span>C`;

  temperature.addEventListener('click', () => {
    if (temperature.innerHTML === `${Math.floor(response.main.temp)}<span>°</span>C`) {
      temperature.innerHTML = `${Math.floor(((response.main.temp) / 5) * 9) + 32}<span>&#xb0;</span>F`;
    } else {
      temperature.innerHTML = `${Math.floor(response.main.temp)}<span>&#xb0;</span>C`;
    }
  });

  cityInfo.appendChild(location);
  cityInfo.appendChild(temperature);

  const weatherDescription = document.createElement('div');
  weatherDescription.classList.add('weather-description');

  const weatherIcon = document.createElement('img');
  weatherIcon.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;
  weatherIcon.alt = response.weather[0].description;

  const description = document.createElement('h4');
  description.classList.add('weather-desc');
  description.innerText = response.weather[0].description;

  weatherDescription.appendChild(weatherIcon);
  weatherDescription.appendChild(description);

  displayArea.appendChild(cityInfo);
  displayArea.appendChild(weatherDescription);

  return displayArea;
};

export default contentLoader;
