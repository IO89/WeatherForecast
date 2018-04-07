import React from 'react';
import ReactDOM from 'react-dom';

const baseURL = process.env.ENDPOINT;

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
    return this.state.weather && this.state.weather.map((object, index) => {
      const icon = object.weather[0].icon.slice(0, -1);

      return (
        <div className="icon" key={index}>
          {icon && <img src={`/img/${icon}.svg`} alt={'weatherPicture'} />}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        { this.renderContent() }
      </div>
    );
  }
}

ReactDOM.render(<Weather />, document.getElementById('app'));
