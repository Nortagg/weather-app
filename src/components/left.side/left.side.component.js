import "./left.side.component.styles.scss";
import moment from "moment/moment";

const LeftSide = ({ data, forecast }) => {
  if (!data) return null;
  const threeHours = [
    {
      name: moment().hour(21),
      imgSrc: `icons/${forecast.list[0].weather[0].icon}.png`,
      temperature: forecast.list[0].main.temp,
    },
    {
      name: moment().hour(0),
      imgSrc: `icons/${forecast.list[1].weather[0].icon}.png`,
      temperature: forecast.list[1].main.temp,
    },
    {
      name: moment().hour(3),
      imgSrc: `icons/${forecast.list[2].weather[0].icon}.png`,
      temperature: forecast.list[2].main.temp,
    },
    {
      name: moment().hour(6),
      imgSrc: `icons/${forecast.list[3].weather[0].icon}.png`,
      temperature: forecast.list[3].main.temp,
    },
    {
      name: moment().hour(9),
      imgSrc: `icons/${forecast.list[4].weather[0].icon}.png`,
      temperature: forecast.list[4].main.temp,
    },
    {
      name: moment().hour(12),
      imgSrc: `icons/${forecast.list[5].weather[0].icon}.png`,
      temperature: forecast.list[5].main.temp,
    },
    {
      name: moment().hour(15),
      imgSrc: `icons/${forecast.list[6].weather[0].icon}.png`,
      temperature: forecast.list[6].main.temp,
    },
    {
      name: moment().hour(18),
      imgSrc: `icons/${forecast.list[7].weather[0].icon}.png`,
      temperature: forecast.list[7].main.temp,
    },
  ];
  return (
    <div className="wrapper-left">
      <div className="top-display-date-clock">
        <p className="date">{moment().format("Do MMMM YYYY")} </p>
        <div className="border_one"></div>
        <p className="time">{moment().format("HH:mm")}</p>
      </div>
      <div className="weather-icon-description">
        <div className="weather-icon">
          <img alt="weather" src={`icons/${data.weather[0].icon}.png`} />
        </div>
        <p className="weather-description">{data.weather[0].description}</p>
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
