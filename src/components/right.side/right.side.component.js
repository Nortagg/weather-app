import "./right.side.component.styles.scss";
import Search from "../search/search";
import CurrentWeather from "./current-weather/current-weather";
import ForecastDays from "./forecast-days/forecast-days";

const RightSide = ({ handleOnSearchChange, currentWeather, forecast }) => {
  return (
    <div className="wrapper-right">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <ForecastDays data={forecast} />}
    </div>
  );
};
export default RightSide;
