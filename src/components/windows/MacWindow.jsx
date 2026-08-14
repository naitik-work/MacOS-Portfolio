import React, { useContext } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";
import { CreateWindowContext } from "../../context/WindowContext";

const MacWindow = ({
  children,
  width = "40vw",
  height = "35vw",
  windowName,
}) => {
  let { windowState, setWindowState } = useContext(CreateWindowContext);

  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 300,
        y: 50,
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <div
              className="dot red"
              onClick={() => {
                setWindowState((state) => ({ ...state, [windowName]: false }));
              }}
            ></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>

          <div className="title">
            <p>hamzaKhan -zsh</p>
          </div>
        </div>
        <div className="main-content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
