import "./right.side.component.styles.scss";
import Search from "../search/search";
import CurrentWeather from "./current-weather/current-weather";
import ForecastDays from "./forecast-days/forecast-days";
import SearchRS from "../search/search.rs";
import { useState } from "react";

const RightSide = ({
  handleOnSearchChange,
  currentWeather,
  forecast,
  data,
}) => {
  const [isRsSearch, setIsRsSearch] = useState(false);

  const handleSearchbarChange = () => {
    setIsRsSearch(!isRsSearch);
  };

  return (
    <>
      {currentWeather ? (
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
      ) : (
        <div className="welcome-page">
          <h1 className="welcome-message">Welcome</h1>
          {isRsSearch ? (
            <SearchRS onSearchChange={handleOnSearchChange} />
          ) : (
            <Search onSearchChange={handleOnSearchChange} />
          )}
          <button
            className="button-search-rs-all"
            onClick={handleSearchbarChange}
          >
            {isRsSearch ? "All" : "Rs"}
          </button>
        </div>
      )}
    </>
  );
};
export default RightSide;
