import "./left.side.component.styles.scss";
import moment from "moment/moment";

const LeftSide = ({ data }) => {
  return (
    <div className="wrapper-left">
      <div className="top-display-date-clock">
        <p className="date">{moment().format("Do MMMM YYYY")} </p>
        <div className="border_one"></div>
        <p className="time">{moment().format("LT")}</p>
      </div>
      {data ? (
        <>
          <div className="weather-icon-description">
            <div className="weather-icon">
              <img alt="weather" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <p className="weather-description">{data.weather[0].description}</p>
          </div>
        </>
      ) : (
        <p className="Message">Enter the city for weather information.</p>
      )}
      <div className="bottom-display-wheater-info-line">
        <div className="border_bottom"></div>
        <div className="by-3h-container">
          <div className="by-3h-card">
            <p className="by-3h-time">9:00</p>
            <div className="border_two"></div>
            <div>icon</div>
            <p className="by-3h-temperature">9°C</p>
          </div>
          <div className="by-3h-card">
            <p className="by-3h-time">12:00</p>
            <div className="border_two"></div>
            <div>icon</div>
            <p className="by-3h-temperature">9°C</p>
          </div>
          <div className="by-3h-card">
            <p className="by-3h-time">15:00</p>
            <div className="border_two"></div>
            <div>icon</div>
            <p className="by-3h-temperature">9°C</p>
          </div>
          <div className="by-3h-card">
            <p className="by-3h-time">18:00</p>
            <div className="border_two"></div>
            <div>icon</div>
            <p className="by-3h-temperature">9°C</p>
          </div>
          <div className="by-3h-card">
            <p className="by-3h-time">21:00</p>
            <div className="border_two"></div>
            <div>icon</div>
            <p className="by-3h-temperature">9°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LeftSide;
