import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

const getLocation = () => {
  if (!navigator.geolocation) {
    console.warn('Geolocation is not supported in this browser');
    return;
  }
  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);

    fetch('http://0.0.0.0:9000/api/weather', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ lat, lon }),
    });
  }
  function error() {
    console.log('Unable to get location');
  }
  navigator.geolocation.getCurrentPosition(success, error);
};
getLocation();

const getWeatherFromApi = async () => {
  try {
    const response = await fetch(`${baseURL}/weather`);
    return response.json();
  } catch (error) {
    console.error(error);
  }

  return {};
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: '',
      weather: null,
    };
  }

  async componentWillMount() {
    const weather = await getWeatherFromApi();
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
    return (
      <div>
        <h2>Forecast for today and next 3 and 6 hours</h2>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<Weather />, document.getElementById('app'));
