import "./right.side.component.styles.scss";
import Search from "../search/search";

const RightSide = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="wrapper-right">
      <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
};
export default RightSide;
