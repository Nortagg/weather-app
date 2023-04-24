import "./App.scss";
import RightSide from "./components/right.side/right.side.component";
import LeftSide from "./components/left.side/left.side.component";

function App() {
  return (
    <div className="container">
      <div className="wrapper-left-right">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
