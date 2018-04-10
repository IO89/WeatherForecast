import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

// Get location and send get request with lat&lon parameters, suppose to receive JSON
const getWeather = async () => {
  const getLocation = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  const position = await getLocation();
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
  return weather;
};

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: '',
      weather: null,
    };
  }

// Wait until weather data is loaded and then set state of weather
  async componentWillMount() {
    const weather = await getWeather();
    this.setState({ weather });
  }
  // if weather is loaded then render icon
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
  // Display weather
  render() {
    return (
      <div>
        <h2>Forecast for today and next 3 and 6</h2>
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<Weather />, document.getElementById('app'));
