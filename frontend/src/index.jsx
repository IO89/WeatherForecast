import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

// Get location and send get request with lat&lon parameters, suppose to receive JSON

const getWeather = async () => {
  const getLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const position = await getLocation();
  console.log('position');
  console.log(position);

  const { latitude, longitude } = position.coords;
  const request = await fetch(
      `${baseURL}/forecast/${latitude}&${longitude}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    }
    );
  const weather = await request.json();
  console.log('success');
  console.log(weather);
  return weather;


  // if (!navigator.geolocation) {
  //   console.log('Geolocation is not supported in this browser');
  //   return;
  // }
  // const success = async (position) => {
  //   const { latitude, longitude } = position.coords;
  //   const request = await fetch(
  //     `${baseURL}/forecast/${latitude}&${longitude}`,
  //     {
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       method: 'GET',
  //     }
  //   );
  //   const weather = await request.json();
  //   console.log('success')
  //   console.log(weather)
  //   return weather;
  // }
  // function error() {
  //   console.log('Unable to get location');
  // }
  // const weather = await navigator.geolocation.getCurrentPosition(success, error);
  // console.log('inside')
  // console.log(weather)
  // return weather
};

/*  const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/forecast`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

   return {};
 }; */

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: '',
      weather: null,
    };
  }

  async componentWillMount() {
    const weather = await getWeather();
    console.log('from request');
    console.log(weather);
    this.setState({ weather });
  }
  renderContent() {
    return (
      this.state.weather &&
      this.state.weather.map((object, index) => {
        const icon = object.weather[0].icon.slice(0, -1);

        return (
          <div className="icon" key={index}>
            {icon && <img src={`/img/${icon}.svg`} alt={'weatherPicture'} />}
          </div>
        );
      })
    );
  }

  render() {
    console.log('state is');
    console.log(this.state);
    return (
      <div>
        <h2>Forecast for today and next 3 and 6</h2>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<Weather />, document.getElementById('app'));
