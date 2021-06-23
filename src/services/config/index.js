const {
  REACT_APP_API_ROOT,
  REACT_APP_API_KEY,
} = process.env;

export default {
  API_ROOT: REACT_APP_API_ROOT || 'https://api.openweathermap.org/data/2.5',
  API_KEY: REACT_APP_API_KEY || '71193d93d89755fdac572b758ed67201',
  IMAGE_URL: 'https://openweathermap.org/img/wn/'
}