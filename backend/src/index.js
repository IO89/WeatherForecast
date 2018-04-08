const debug = require('debug')('weathermap');

const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const fetch = require('node-fetch');
const cors = require('kcors');

const API_KEY = '91931bbedeaee3ede7a5eb46cbd6fe21';
const appId = process.env.APPID || API_KEY;
const mapURI = process.env.MAP_ENDPOINT || 'http://api.openweathermap.org/data/2.5';
const targetCity = process.env.TARGET_CITY || 'Helsinki,fi';

const port = process.env.PORT || 9000;

const app = new Koa();

app.use(cors());
app.use(bodyParser());

const fetchWeather = async () => {
  const endpoint = `${mapURI}/forecast?q=${targetCity}&appid=${appId}&`;
  const response = await fetch(endpoint);
  return response ? response.json() : {};
};

router.get('/api/weather', async ctx => {
  const weatherData = await fetchWeather();
  ctx.type = 'application/json; charset=utf-8';
  ctx.body = weatherData.list.slice(0, 3) ? weatherData.list.slice(0, 3) : [];
});

router.post('/api/weather', async ctx => {
  const obj = await ctx.request.body;
  //console.log(obj);
  ctx.status = 200;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port);

console.log(`App listening on port ${port}`);
