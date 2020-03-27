// eslint-disable-next-line import/no-unresolved
import '@babel/polyfill';

import dataController from './data';
import contentLoader from './contentLoader';

const searchBox = document.querySelector('#location');

const celsiusIcon = document.querySelector('.celsius');

const fahrenheitIcon = document.querySelector('.fahrenheit');

const loader = document.querySelector('.loader');

const errorMessage = document.querySelector('.error-message');

const resultArea = document.querySelector('.result');

const handleData = async (unit) => {
  resultArea.innerHTML = '';
  loader.setAttribute('style', 'display: block !important');
  try {
    const response = await dataController.getWeatherInfo(searchBox.value, unit);
    loader.removeAttribute('style');
    errorMessage.removeAttribute('style');

    if (response === 'City not found') {
      errorMessage.setAttribute('style', 'display: block !important');
    } else {
      contentLoader(response, unit);
    }
  } catch (error) {
    errorMessage.setAttribute('style', 'display: block !important');
    errorMessage.innerText = error.message;
  }
};


celsiusIcon.addEventListener('click', () => handleData('metric'));
fahrenheitIcon.addEventListener('click', () => handleData('imperial'));
