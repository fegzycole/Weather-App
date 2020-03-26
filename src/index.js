// eslint-disable-next-line import/no-unresolved
import '@babel/polyfill';

import dataController from './data';
import contentLoader from './contentLoader';

const searchBox = document.querySelector('#location');

const searchIcon = document.querySelector('.search-logo');

const loader = document.querySelector('.loader');

const errorMessage = document.querySelector('.error-message');

const resultArea = document.querySelector('.result');


searchIcon.addEventListener('click', async () => {
  resultArea.innerHTML = '';
  loader.setAttribute('style', 'display: block !important');
  const response = await dataController.getWeatherInfo(searchBox.value);
  loader.removeAttribute('style');

  if (response === 'City not found') {
    errorMessage.setAttribute('style', 'display: block !important');
  } else {
    errorMessage.removeAttribute('style');
    contentLoader(response);
  }
});
