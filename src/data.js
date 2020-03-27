const API_KEY = 'a8ef79c59a8b86103badfd4c8a711240';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const dataController = (() => {
  const getWeatherInfo = async (location, units) => {
    try {
      const response = await fetch(`${BASE_URL}weather?q=${location}&units=${units}&APPID=${API_KEY}`,
        {
          mode: 'cors',
        });

      if (response.status === 200) {
        return response.json();
      }
      return 'City not found';
    } catch (error) {
      return error.message;
    }
  };

  return { getWeatherInfo };
})();

export default dataController;
