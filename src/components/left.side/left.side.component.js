import "./left.side.component.styles.scss";

const LeftSide = ({ data }) => {
  return (
    <div className="wrapper-left">
      <div className="top-display-date-clock">
        <p>25 April 2023</p>
        <p>11:00</p>
      </div>
      <img
        alt="weather"
        className="weather-icon"
        src={`icons/${data && data.weather[0].icon}.png`}
      />
      <p>{data && data.weather[0].description}</p>
      <div className="bottom-display-wheater-info-line">
        <div className="by-3h-container">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </div>
  );
};
export default LeftSide;
