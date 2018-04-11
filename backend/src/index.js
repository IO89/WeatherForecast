const debug = require('debug')('weathermap');
const Koa = require('koa');
const router = require('koa-router')();
const fetch = require('node-fetch');
const cors = require('kcors');

const API_KEY = '91931bbedeaee3ede7a5eb46cbd6fe21';
const appId = process.env.APPID || API_KEY;
const mapURI = process.env.MAP_ENDPOINT || 'http://api.openweathermap.org/data/2.5';
// const targetCity = process.env.TARGET_CITY || 'Helsinki,fi';
const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());

// fetch weather data with lat&lon provided by client's browser and return json obj.
const fetchWeatherLocal = async (lat, lon) => {
  const endpoint = `${mapURI}/forecast?lat=${lat}&lon=${lon}&appid=${appId}&`;
  const response = await fetch(endpoint);
  return response ? response.json() : {};
};
// Route for get request with parameters from client browser(lat&lon)
// Then calling fetchWeatherLocal with lat&lon
// Sending back slice of array for today and next 3 and 6 hours
router.get('/api/forecast/:coords', async ctx => {
  let coordinates = ctx.params.coords;
  coordinates = coordinates.split('&');
  const lat = coordinates[0];
  const lon = coordinates[1];
  const weatherData = await fetchWeatherLocal(lat, lon);
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData.list.slice(0, 3) ? weatherData.list.slice(0, 3) : {};
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
