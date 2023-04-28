import "./forecast-days-styles.scss";
import moment from "moment";

const ForecastDays = ({ data }) => {
  console.log(data);
  const WEEK_DAYS = [
    {
      name: moment(),
      imgSrc: `icons/${data.list[0].weather[0].icon}.png`,
      display: data.list[0].weather[0].description,
      tempMin: data.list[0].main.temp_min,
      tempMax: data.list[0].main.temp_max,
    },
    {
      name: moment().add(1, "days"),
      imgSrc: `icons/${data.list[1].weather[0].icon}.png`,
      display: data.list[1].weather[0].description,
      tempMin: data.list[1].main.temp_min,
      tempMax: data.list[1].main.temp_max,
    },
    {
      name: moment().add(2, "days"),
      imgSrc: `icons/${data.list[2].weather[0].icon}.png`,
      display: data.list[2].weather[0].description,
      tempMin: data.list[2].main.temp_min,
      tempMax: data.list[2].main.temp_max,
    },
    {
      name: moment().add(3, "days"),
      imgSrc: `icons/${data.list[3].weather[0].icon}.png`,
      display: data.list[3].weather[0].description,
      tempMin: data.list[3].main.temp_min,
      tempMax: data.list[3].main.temp_max,
    },
    {
      name: moment().add(4, "days"),
      imgSrc: `icons/${data.list[4].weather[0].icon}.png`,
      display: data.list[4].weather[0].description,
      tempMin: data.list[4].main.temp_min,
      tempMax: data.list[4].main.temp_max,
    },
  ];
  return (
    <div>
      <h1 className="5-days-title">5 days</h1>
      {WEEK_DAYS.map((day) => (
        <div className="forecast-card">
          <img alt="weather" className="icon-small" src={day.imgSrc} />
          <div className="date-display-container">
            <p className="forecast-date">{day.name.format("dddd, MMMM D")}</p>
            <p className="forecast-weather-display">{day.display}</p>
          </div>
          <div className="border-forecast"></div>
          <div className="min-max-container">
            <p className="forecast-tempmin">{Math.round(day.tempMin)}°</p>
            <p className="forecast-tempmax">{Math.round(day.tempMax)}°</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ForecastDays;
