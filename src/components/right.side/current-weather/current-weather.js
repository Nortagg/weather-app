import "./current-weather-styles.scss";
import { BsWind } from "react-icons/bs";
import { useState, useEffect } from "react";
import {
  WiDirectionUp,
  WiDirectionDown,
  WiDirectionUpRight,
  WiDirectionRight,
  WiDirectionDownRight,
  WiDirectionDownLeft,
  WiDirectionLeft,
  WiDirectionUpLeft,
} from "react-icons/wi";

const CurrentWeather = ({ data }) => {
  const getWindDirection = (degree) => {
    if (degree > 337.5 || degree <= 22.5) {
      return (
        <>
          <WiDirectionUp />
          North
        </>
      );
    } else if (degree > 22.5 && degree <= 67.5) {
      return (
        <>
          <WiDirectionUpRight />
          Northeast
        </>
      );
    } else if (degree > 67.5 && degree <= 112.5) {
      return (
        <>
          <WiDirectionRight />
          East
        </>
      );
    } else if (degree > 112.5 && degree <= 157.5) {
      return (
        <>
          <WiDirectionDownRight />
          Southeast
        </>
      );
    } else if (degree > 157.5 && degree <= 202.5) {
      return (
        <>
          <WiDirectionDown />
          South
        </>
      );
    } else if (degree > 202.5 && degree <= 247.5) {
      return (
        <>
          <WiDirectionDownLeft />
          Southwest
        </>
      );
    } else if (degree > 247.5 && degree <= 292.5) {
      return (
        <>
          <WiDirectionLeft />
          West
        </>
      );
    } else if (degree > 292.5 && degree <= 337.5) {
      return (
        <>
          <WiDirectionUpLeft />
          Northwest
        </>
      );
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
