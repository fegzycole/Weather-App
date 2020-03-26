const API_KEY = '9c2fcbfe4dd198b6d240b90b45a68f8d';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const dataController = (() => {
  const getWeatherInfo = async (location, units = 'metric') => {
    try {
      const response = await fetch(`${BASE_URL}weather?q=${location}&units=${units}&APPID=${API_KEY}`,
        {
          mode: 'cors',
        });

      if (response.status === 200) {
        return response.json();
      } else {
        return 'City not found';
      }
    } catch (error) {
      return error.message;
    }
  };

  return { getWeatherInfo };
})();

export default dataController;
