import "./right.side.component.styles.scss";
import Search from "../search/search";
import CurrentWeather from "./current-weather/current-weather";

const RightSide = ({ handleOnSearchChange, currentWeather }) => {
  return (
    <div className="wrapper-right">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
};
export default RightSide;
