import "./current-weather-styles.scss";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top-display">
        <p className="temperature">11°C</p>
        <div className="parameter-row-wind">
          <p className="wind-side">Northwest,</p>
          <p className="wind-speed">38,9km/h</p>
        </div>
        <p className="city">{data.city}</p>
      </div>
      <div className="bottom-display">
        <div className="forecast-5days">
          <h1 className="forecast-title">The Next Days Forecast</h1>
          <p className="5-days-option">5 days</p>
        </div>
        <div className="days-wrapper">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
