import "./right.side.component.styles.scss";
import Search from "../search/search";
import CurrentWeather from "./current-weather/current-weather";
import ForecastDays from "./forecast-days/forecast-days";
import SearchRS from "../search/search.rs";
import { useState } from "react";

const RightSide = ({ handleOnSearchChange, currentWeather, forecast }) => {
  const [isRsSearch, setIsRsSearch] = useState(false);

  const handleSearchbarChange = () => {
    setIsRsSearch(!isRsSearch);
  };

  return (
    <div className="wrapper-right">
      {isRsSearch ? (
        <SearchRS onSearchChange={handleOnSearchChange} />
      ) : (
        <Search onSearchChange={handleOnSearchChange} />
      )}
      <button className="button" onClick={handleSearchbarChange}>
        {isRsSearch ? "Search for All" : "Search in Serbia"}
      </button>

      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <ForecastDays data={forecast} />}
    </div>
  );
};
export default RightSide;
