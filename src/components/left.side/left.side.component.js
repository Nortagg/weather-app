import "./left.side.component.styles.scss";
import moment from "moment/moment";
import { useState, useEffect } from "react";

const LeftSide = ({ data, forecast }) => {
  const [date, setDate] = useState(moment());
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!data)
    return (
      <div className="loading">
        Enter location to <br /> get weather info.
      </div>
    );

  const currentHour = moment().hour();
  const hoursSinceLastPeriod = currentHour % 3;
  const periodsSinceLastPeriod = Math.floor(currentHour / 3);

  if (hoursSinceLastPeriod >= 3) {
    const nextHour = periodsSinceLastPeriod * 3 + 3;
    moment().hour(nextHour).minute(0).second(0);
  }

  const threeHours = [
    {
      name: moment()
        .hour(currentHour - (currentHour % 3))
        .minute(0)
        .second(0),
      imgSrc: `icons/${forecast.list[0].weather[0].icon}.png`,
      temperature: forecast.list[0].main.temp,
    },
    {
      name: moment()
        .hour(currentHour - (currentHour % 3) + 3)
        .minute(0)
        .second(0),
      imgSrc: `icons/${forecast.list[1].weather[0].icon}.png`,
      temperature: forecast.list[1].main.temp,
    },
    {
      name: moment()
        .hour(currentHour - (currentHour % 3) + 6)
        .minute(0)
        .second(0),
      imgSrc: `icons/${forecast.list[2].weather[0].icon}.png`,
      temperature: forecast.list[2].main.temp,
    },
    {
      name: moment()
        .hour(currentHour - (currentHour % 3) + 9)
        .minute(0)
        .second(0),
      imgSrc: `icons/${forecast.list[3].weather[0].icon}.png`,
      temperature: forecast.list[3].main.temp,
    },
    {
      name: moment()
        .hour(currentHour - (currentHour % 3) + 12)
        .minute(0)
        .second(0),
      imgSrc: `icons/${forecast.list[4].weather[0].icon}.png`,
      temperature: forecast.list[4].main.temp,
    },
    {
      name: moment()
        .hour(currentHour - (currentHour % 3) + 15)
        .minute(0)
        .second(0),
      imgSrc: `icons/${forecast.list[5].weather[0].icon}.png`,
      temperature: forecast.list[5].main.temp,
    },
    {
      name: moment()
        .hour(currentHour - (currentHour % 3) + 18)
        .minute(0)
        .second(0),
      imgSrc: `icons/${forecast.list[6].weather[0].icon}.png`,
      temperature: forecast.list[6].main.temp,
    },
    {
      name: moment()
        .hour(currentHour - (currentHour % 3) + 21)
        .minute(0)
        .second(0),
      imgSrc: `icons/${forecast.list[7].weather[0].icon}.png`,
      temperature: forecast.list[7].main.temp,
    },
  ];

  return (
    <div className="wrapper-left">
      <div className="weather-icon-time-sides-info">
        <div className="icon-time-other-info">
          <div className="display-date-clock">
            <p className="date">{date.format("Do MMMM YYYY")}</p>
            <div className="border_one"></div>
            <p className="time">{date.format("HH:mm")}</p>
          </div>
          <div className="weather-icon-description">
            <img
              alt="weather"
              className="weather-icon"
              src={`icons/${data.weather[0].icon}.png`}
            />
            <p className="weather-description">{data.weather[0].description}</p>
          </div>
          <div className="sides-info">
            <div className="left-info">
              <p>Humidity: {data.main.humidity}%</p>
              <p>Pressure: {data.main.pressure}hPa</p>
              <p>Visibility: {data.visibility / 1000}km</p>
            </div>
            <div className="bordred-sides"></div>
            <div className="right-info">
              <p>Feels like: {Math.round(data.main.feels_like)}°C</p>
              <p>Temp Max: {Math.round(data.main.temp_max)}°C</p>
              <p>Temp Min: {Math.round(data.main.temp_min)}°C</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border_bottom"></div>
      <div className="wrapper-bottom-display-wheater-info">
        {threeHours.map((day, index) => (
          <div className="bottom-display-wheater-info" key={index}>
            <div className="by-3h-container">
              <div className="by-3h-card">
                <p className="by-3h-time">{day.name.format("HH:00")}</p>
                <div className="border_two"></div>
                <img
                  alt="weather"
                  className="icon-small-three"
                  src={day.imgSrc}
                />
                <p className="by-3h-temperature">
                  {Math.round(day.temperature)}°C
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
