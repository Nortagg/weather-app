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
      imgSrc: `icons/${data.list[8].weather[0].icon}.png`,
      display: data.list[8].weather[0].description,
      tempMin: data.list[8].main.temp_min,
      tempMax: data.list[8].main.temp_max,
    },
    {
      name: moment().add(2, "days"),
      imgSrc: `icons/${data.list[16].weather[0].icon}.png`,
      display: data.list[16].weather[0].description,
      tempMin: data.list[16].main.temp_min,
      tempMax: data.list[16].main.temp_max,
    },
    {
      name: moment().add(3, "days"),
      imgSrc: `icons/${data.list[24].weather[0].icon}.png`,
      display: data.list[24].weather[0].description,
      tempMin: data.list[24].main.temp_min,
      tempMax: data.list[24].main.temp_max,
    },
    {
      name: moment().add(4, "days"),
      imgSrc: `icons/${data.list[32].weather[0].icon}.png`,
      display: data.list[32].weather[0].description,
      tempMin: data.list[32].main.temp_min,
      tempMax: data.list[32].main.temp_max,
    },
  ];
  return (
    <div className="content">
      <div className="border-middle"></div>
      <h1 className="forecast-days">The Next Days Forecast</h1>
      <h2 className="five-days-title">5 days</h2>
      <div className="wrapper-forecast-card">
        {WEEK_DAYS.map((day, index) => (
          <div className="forecast-card" key={index}>
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
    </div>
  );
};
export default ForecastDays;
