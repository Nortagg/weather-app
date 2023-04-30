import "./current-weather-styles.scss";
import { BsWind } from "react-icons/bs";
import { useState, useEffect } from "react";

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
  const [temperature, setTemperature] = useState(Math.round(data.main.temp));
  const [windSpeed, setwindSpeed] = useState(data.wind.speed);
  const [windDirection, setWindDirection] = useState(
    getWindDirection(data.wind.deg)
  );
  useEffect(() => {
    setTemperature(Math.round(data.main.temp));
    setwindSpeed(data.wind.speed);
    setWindDirection(getWindDirection(data.wind.deg));
  }, [data]);

  return (
    <div className="weather">
      <div className="top-display">
        <p className="temperature">{temperature}°C</p>
        <div className="parameter-row-wind">
          <div className="wind-icon">
            <BsWind />
          </div>
          <p className="wind-side"> {windDirection},</p>
          <p className="wind-speed">{windSpeed}m/s</p>
        </div>
        <p className="city">{data.city}</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
