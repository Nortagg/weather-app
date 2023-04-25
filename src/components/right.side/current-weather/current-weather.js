import "./current-weather-styles.scss";
import { BsWind } from "react-icons/bs";

const CurrentWeather = ({ data }) => {
  const getWindDirection = (degree) => {
    if (degree > 337.5 || degree <= 22.5) {
      return "North";
    } else if (degree > 22.5 && degree <= 67.5) {
      return "Northeast";
    } else if (degree > 67.5 && degree <= 112.5) {
      return "East";
    } else if (degree > 112.5 && degree <= 157.5) {
      return "Southeast";
    } else if (degree > 157.5 && degree <= 202.5) {
      return "South";
    } else if (degree > 202.5 && degree <= 247.5) {
      return "Southwest";
    } else if (degree > 247.5 && degree <= 292.5) {
      return "West";
    } else if (degree > 292.5 && degree <= 337.5) {
      return "Northwest";
    }
  };
  return (
    <div className="weather">
      <div className="top-display">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="parameter-row-wind">
          <div className="wind-icon">
            <BsWind />
          </div>
          <p className="wind-side"> {getWindDirection(data.wind.deg)},</p>
          <p className="wind-speed">{data.wind.speed}m/s</p>
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
