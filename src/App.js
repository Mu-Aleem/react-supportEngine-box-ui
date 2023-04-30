// import SupportEngine from "./SupportEngine";
import "antd/dist/antd.css";
import { Progress } from "antd";
import React, { useState } from "react";

function App() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* <SupportEngine /> */}

      <div className="mainDiv">
        <div
          className={`box1 ${isActive ? "onClickClass" : "withOutOnClick"}`}
          onClick={toggleClass}
        >
          <Progress
            type="circle"
            percent={75}
            width="80px"
            className="progressFirst"
            strokeColor={"#d35400"}
          />
        </div>
        <div
          className={`box2 ${isActive ? "withOutOnClick" : "onClickClass"} `}
          onClick={toggleClass}
        >
          <Progress
            type="circle"
            percent={40}
            width="80px"
            className="progresssec"
            strokeColor={"#9b59b6"}
            format={() => (
              <>
                <p className="progressTitle">remaining</p>
                {/* <p className="progressClock">
                  {moment.utc(drivingTimeData * 1000).format("HH:mm") ||
                    "11:00"}
                </p> */}
                <span className="progressDicription">DRIVING</span>
              </>
            )}
          />
        </div>
      </div>
    </>
  );
}

export default App;
