// eslint-disable-next-line import/no-unresolved
import '@babel/polyfill';

import dataController from './data';
import contentLoader from './contentLoader';

const searchBox = document.querySelector('#location');

const container = document.querySelector('.container');

const toggleBtn = document.querySelector('.toggle-btn');

container.addEventListener('click', () => {
  if (toggleBtn.classList.contains('active')) {
    toggleBtn.classList.remove('active');
  } else {
    toggleBtn.classList.add('active');
  }
});

const searchIcon = document.querySelector('.search-logo');

const loader = document.querySelector('.loader');

const errorMessage = document.querySelector('.error-message');

const resultArea = document.querySelector('.result');


searchIcon.addEventListener('click', async () => {
  resultArea.innerHTML = '';
  loader.setAttribute('style', 'display: block !important');

  const unit = toggleBtn.classList.contains('active') ? 'imperial' : 'metric';
  try {
    const response = await dataController.getWeatherInfo(searchBox.value, unit);
    loader.removeAttribute('style');
    errorMessage.removeAttribute('style');

    if (response === 'City not found') {
      errorMessage.setAttribute('style', 'display: block !important');
    } else {
      contentLoader(response);
    }
  } catch (error) {
    errorMessage.setAttribute('style', 'display: block !important');
    errorMessage.innerText = error.message;
  }
});
